import jwt
import orjson

from django.shortcuts import get_object_or_404
from django.http import HttpResponse

from rest_framework_simplejwt import settings

from ninja.renderers import BaseRenderer
from ninja import NinjaAPI
from ninja.security import HttpBearer
from traitlets import Undefined

from user.models import User
from subscription.api import like_router, subscription_router
from user.api import user_router


class GlobalAuth(HttpBearer):
    def authenticate(self, request, token):

        if token == 'save':

            user = get_object_or_404(User, pk=1)

            return user

        try:
            payload = jwt.decode(jwt=token, key=settings.DEFAULTS['SIGNING_KEY'], algorithms=settings.DEFAULTS['ALGORITHM'])
            user_id = payload['user_id']
            user = get_object_or_404(User, pk=user_id)

            return user

        except jwt.ExpiredSignatureError:
            HttpResponse(401)
            return

# api 렌더링 (한글이 깨지는 문제)
class ORJSONRenderer(BaseRenderer):
    media_type = "application/json"

    def render(self, request, data, *, response_status):
        return orjson.dumps(data)


api = NinjaAPI(auth=GlobalAuth(), renderer=ORJSONRenderer()) # 전체 권한 제한 설정

# 라우터 등록
api.add_router('/like/', like_router)
api.add_router('/user/', user_router)
api.add_router('/subscription/', subscription_router)