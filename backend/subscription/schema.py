from ninja import Schema, ModelSchema
from .models import Subscription


class ErrorSchema(Schema):
    message: str

class OpenApiSchema(Schema):
    currentCount: int
    data: list = None
    matchCount: int
    page: int
    perPage: int
    totalCount: int

# 좋아요 get 스키마
class UserGetLikeSchema(Schema):
    status: bool
    like_num: int

# 좋아요 post 스키마
class SubscriptionSchema(ModelSchema):

    like_num: int

    class Config:
        model = Subscription
        model_fields = ['expiry', 'sub_id', 'name', 'end_date', 'address']

class UserLikeListSchema(ModelSchema):

    class Config:
        model = Subscription
        model_fields = ['expiry', 'sub_id', 'name', 'end_date', 'address']

class UserSubscriptionSchema(ModelSchema):

    class Config:
        model = Subscription
        model_fields = ['sub_id', 'name', 'end_date', 'address']


class LikeDeleteSchema(Schema):
    sub_id : int