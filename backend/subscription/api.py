import environ
import os
from ninja import Router
from typing import List

from .models import Subscription, UserSubscription
from . import schema
import requests
import json


env = environ.Env(
    DEBUG=(bool, False)
)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))


subscription_router = Router(tags=["청약 API"])

@subscription_router.get('/{queryData}',
                        response={200: schema.OpenApiSchema},
                        summary="청약 가져오기",
                        auth=None,
                        )
def get_subscription(request, queryData: str):
    """
    ## subscription API 사용방법입니다.
    **default -> 기본 데이터 page=1, perPage=10**

    이외에는 공공 API와 동일하게 사용하면 됩니다.

    **기존 쿼리문의 첫 &은 생략합니다.**

    ex)page=3&perPage=15 이렇게 보내시면 됩니다.
    """

    serviceKey = env('OPEN_API')

    url = 'http://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail'  + f'?serviceKey={serviceKey}'

    if queryData == 'default':
        response = requests.get(url)

    else:
        response = requests.get(url + '&' + queryData)

    contents = json.loads(response.text)
    subscription_list = contents

    return 200, {'subscription_data': subscription_list}


like_router = Router(tags=["좋아요 API"])

# 청약 좋아요 개수와 사용자가 좋아요를 눌렀는지 상태 가져오기
@like_router.get('/{sub_id}',
                response={200: schema.UserGetLikeSchema},
                summary="청약 좋아요 가져오기",
                auth=None)
def user_get_like(request, sub_id: int):
    '''
    청약의 좋아요 갯수와 로그인시 사용자가 좋아요를 눌렀는지 확인하는 API입니다.
    like/{공고번호}로 가져오시면 됩니다.

    사용자가 좋아요를 클릭했으면 status에 True로 입력되어 있습니다.
    '''

    try:
        subscription = Subscription.objects.get(sub_id=sub_id)
        user_subscription = UserSubscription.objects.filter(
            user_subscription_id=subscription.id)

        if request.user.id != None:

            user = UserSubscription.objects.filter(
                user_subscription_id=subscription.id, user_id=request.user.id)

            if user:
                return 200, {'status': True, 'like_num': len(user_subscription)}

            else:
                return 200, {'status': False, 'like_num': len(user_subscription)}

        else:
            return 200, {'status': False, 'like_num': len(user_subscription)}

    except Subscription.DoesNotExist as e:
        return 200, {'status': False, 'like_num': 0}

# 좋아요가 눌러진 청약 리스트 가져오기
@like_router.get('/',
                response={200: List[schema.SubscriptionSchema]},
                summary="인기 청약 리스트",
                auth=None)
def get_like_list(request):
    '''
    인기 청약 리스트입니다.
    만료된 청약 리스트를 제외하고 전달 됩니다.
    like_num은 좋아요 갯수인데 0개일 경우 사용자가 클릭했다가 취소한 경우입니다.
    '''

    subscriptions = Subscription.objects.filter(expiry=False)

    if len(subscriptions) != 0:
        for sub in subscriptions:
            usersubscription = UserSubscription.objects.filter(user_subscription_id=sub.id)
            sub.like_num = len(usersubscription)

    return subscriptions

@like_router.post(
    '/',
    response={201: None, 403: schema.ErrorSchema},
    summary="청약 좋아요 누르기",
)
def post_like(request, data: schema.UserSubscriptionSchema):
    '''
    청약 좋아요 POST API입니다.
    sub_id: int -> 공고 번호
    name: str -> 건물 이름 or 청약 제목
    end_date: str -> date 객체 (년, 월, 일)
    address: str -> 주소

    이미 좋아요를 표시한 사용자일 경우 403에러를 리턴합니다.
    '''

    sub_id = data.sub_id
    name = data.name
    end_date = data.end_date
    address = data.address

    try:
        subscription = Subscription.objects.get(sub_id=sub_id)

        user_subcription = UserSubscription.objects.filter(user_id=request.auth.id, user_subscription_id=subscription.id)
        if len(user_subcription) != 0:
            return 403, {'message': '이미 좋아요 표시를 한 사용자입니다.'}

        user_subcription = UserSubscription.objects.create(user_id=request.auth.id)
        subscription.user_subscription.add(user_subcription)
        subscription.save()

    except Subscription.DoesNotExist as e:
        subscription = Subscription.objects.create(sub_id=sub_id, name=name, end_date=end_date, address=address)
        user_subcription = UserSubscription.objects.create(user_id=request.auth.id)
        subscription.user_subscription.add(user_subcription)
        subscription.save()

    return 201

@like_router.delete(
    '/',
    response={200: None, 400: schema.ErrorSchema},
    summary="청약 좋아요 지우기",
)
def delete_like(request, data: schema.LikeDeleteSchema):
    '''
    사용자 좋아요 지우기 API입니다.
    sub_id: int -> 공고 번호

    보내시면 됩니다.
    '''

    sub_id = data.sub_id
    try:
        subscription = Subscription.objects.get(sub_id=sub_id)

    except Subscription.DoesNotExist as e:
        return 400, {'message': '공고 번호를 확인해주세요.'}

    try:
        user_subcription = UserSubscription.objects.get(
        user_id=request.user.id, user_subscription_id=subscription.id)
        user_subcription.delete()

    except UserSubscription.DoesNotExist as e:
        return 400, {'message': '해당 좋아요는 존재하지 않습니다.'}

    return 200
