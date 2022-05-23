from ninja import Router

from subscription.models import UserSubscription, Subscription
from . import schema
from user.models import User


user_router = Router(tags=["사용자 API"])

# 유저 정보 가져오기
@user_router.get(
    '/like/',
    response={200: schema.UserLikeSchema},
    summary="사용자 좋아요 목록",
)
def get_user(request):
    '''
    사용자 좋아요 목록입니다.

    데이터는 like_list에 담겨 있습니다.
    '''

    user_subscriptions = UserSubscription.objects.filter(user_id=request.auth.id)

    like_list = []

    if len(user_subscriptions) != 0:
        for user_subscription in user_subscriptions:
            subscription = Subscription.objects.get(id=user_subscription.user_subscription_id)
            like_num = len(UserSubscription.objects.filter(user_subscription_id=subscription.id))
            subscription.like_num = like_num
            like_list.append(subscription)

    return 200, {'like_list':like_list}

# 사용자 정보 수정
@user_router.patch(
    '/',
    response={201: None},
    summary='사용자 정보 수정'
)
def edit_user(request, data: schema.UserSchema):
    '''
    사용자 정부 수정 API입니다.

    username: str -> 사용자 이름
    email: str -> 사용자 이메일

    email 정규식 체크해서 보내주시기 바랍니다.
    '''
    user_email = data.email
    user_username = data.username

    user_info = User.objects.get(id=request.auth.id)

    user_info.email = user_email
    user_info.username = user_username
    user_info.save()

    return 201
