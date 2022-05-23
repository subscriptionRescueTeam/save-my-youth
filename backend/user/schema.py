from typing import List

from ninja import ModelSchema, Schema
from subscription.schema import SubscriptionSchema


# 사용자 좋아요 리스트 스키마
class UserLikeSchema(Schema):

    like_list : List[SubscriptionSchema] = None

class UserSchema(Schema):
    first_name: str
    last_name: str
    email: str