from ninja import Router

from .models import Subscription, UserSubscription
from . import schema


like_router = Router(tags=["좋아요 API"])

# 청약 좋아요 개수와 사용자가 좋아요를 눌렀는지 상태 가져오기
@like_router.get('/{sub_id}',
                response={200: schema.LikeGetSchema},
                summary="청약 좋아요 가져오기",
                auth=None)
def get_like(request, sub_id: int):

    try:
        subscription = Subscription.objects.get(sub_id=sub_id)
        user_subscription = UserSubscription.objects.filter(
            user_subscription_id=subscription.id)

        if request.user.id != None:

            user = UserSubscription.objects.filter(
                user_subscription_id=subscription.id, user_id=request.user.id)

            if user:
                return 200, {'status': True, 'num': len(user_subscription)}

            else:
                return 200, {'status': False, 'num': len(user_subscription)}

        else:
            return 200, {'status': False, 'num': len(user_subscription)}

    except Subscription.DoesNotExist as e:
        return 404


@like_router.post(
    '/',
    response={200: None},
    summary="청약 좋아요 누르기",
)
def post_like(request, data: schema.SubscriptionSchema):

    sub_id = data.sub_id
    name = data.name
    date = data.date

    user_subcription = UserSubscription.objects.create(user=request.user)

    try:
        subscription = Subscription.objects.get(sub_id=sub_id)
        subscription.user_subscription.add(user_subcription)
        subscription.save()

    except Subscription.DoesNotExist as e:
        subscription = Subscription.objects.create(sub_id=sub_id, name=name, date=date)
        subscription.user_subscription.add(user_subcription)
        subscription.save()

    return 200


@like_router.delete(
    '/',
    response={200: None},
    summary="청약 좋아요 지우기",
)
def delete_like(request, data: schema.LikeDeleteSchema):

    sub_id = data.sub_id
    subscription = Subscription.objects.get(sub_id=sub_id)
    user_subcription = UserSubscription.objects.get(
        user_id=request.user.id, user_subscription_id=subscription.id)

    user_subcription.delete()

    return 200
