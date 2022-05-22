from typing import List

from ninja import Schema
from subscription.schema import SubscriptionSchema


# 사용자 좋아요 리스트 스키마
class UserLikeSchema(Schema):

    like_list : List[SubscriptionSchema] = None