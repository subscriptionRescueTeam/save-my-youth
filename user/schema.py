from typing import List

from ninja import ModelSchema
from .models import User
from subscription.schema import LikePostSchema


# 좋아요 get 스키마
class UserSchema(ModelSchema):

    user_like : List[LikePostSchema] = None

    class Config:
        model = User
        model_fields = ['id', 'email', 'username']