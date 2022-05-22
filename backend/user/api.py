from ninja import Router

from subscription.models import UserSubscription, Subscription
from . import schema
from user.models import User


user_router = Router(tags=["사용자 API"])

# 유저 정보 가져오기
@user_router.get(
    '/like/',
    response={200: schema.UserLikeSchema},
    summary="User 좋아요 목록",
)
def get_user(request):

    user_subscriptions = UserSubscription.objects.filter(user_id=request.auth.id)

    like_list = []

    if len(user_subscriptions) != 0:
        for user_subscription in user_subscriptions:
            subscription = Subscription.objects.get(id=user_subscription.user_subscription_id)
            like_num = len(UserSubscription.objects.filter(user_subscription_id=subscription.id))
            subscription.like_num = like_num
            like_list.append(subscription)

    return 200, {'like_list':like_list}