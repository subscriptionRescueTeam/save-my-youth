from ninja import Schema, ModelSchema
from .models import Subscription


class ErrorSchema(Schema):
    message: str


class OpenApiSchema(Schema):
    subscription_data : dict = None


# 좋아요 get 스키마
class LikeGetSchema(Schema):
    status : bool
    num : int

# 좋아요 post 스키마
class SubscriptionSchema(ModelSchema):

    class Config:
        model = Subscription
        model_fields = ['sub_id', 'name', 'date']


class LikeDeleteSchema(Schema):
    sub_id : int