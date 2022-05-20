from ninja import Router

from subscription.models import UserSubscription, Subscription
from . import schema


user_router = Router(tags=["사용자 API"])

# 유저 정보 가져오기
@user_router.get(
    '/',
    response={200: schema.UserSchema},
    summary="User 정보",
)
def get_user(request):

    user_subscription = UserSubscription.objects.filter(user_id=request.auth.id)
    user = request.user
    like = []

    for sub in user_subscription:
        subscription = Subscription.objects.get(id=sub.user_subscription_id)
        like.append(subscription)

    user.user_like = like

    return user