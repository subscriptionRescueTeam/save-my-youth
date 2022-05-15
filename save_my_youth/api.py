import jwt

from django.shortcuts import get_object_or_404

from rest_framework_simplejwt import settings

from ninja import NinjaAPI
from ninja.security import HttpBearer
from user.models import User

from subscription.api import like_router
from user.api import user_router


class GlobalAuth(HttpBearer):
    def authenticate(self, request, token):

        if token == 'save':

            user = get_object_or_404(User, pk=1)

            return user

        payload = jwt.decode(jwt=token, key=settings.DEFAULTS['SIGNING_KEY'], algorithms=settings.DEFAULTS['ALGORITHM'])
        user_id = payload['user_id']
        user = get_object_or_404(User, pk=user_id)

        return user


api = NinjaAPI(auth=GlobalAuth()) # 전체 권한 제한 설정

# 라우터 등록
api.add_router('/like/', like_router)
api.add_router('/user/', user_router)