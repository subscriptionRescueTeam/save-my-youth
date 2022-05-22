from typing import List
from ninja import Router

from . import schema
from .models import Faq, FaqCategory


faq_router = Router(tags=["FAQ API"])

# FAQ 가져오기
@faq_router.get(
    '/',
    response={200: List[schema.FaqSchema]},
    summary="FAQ 목록",
    auth=None
)
def get_faq(request):

    faq = Faq.objects.all()

    return 200, faq