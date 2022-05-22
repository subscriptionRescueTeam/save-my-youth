from ninja import ModelSchema
from .models import Faq, FaqCategory


class FaqCategorySchema(ModelSchema):

    class Config:
        model = FaqCategory
        model_fields = ['category_name']


class FaqSchema(ModelSchema):

    faq_category: FaqCategorySchema

    class Config:
        model = Faq
        model_fields = ['question', 'answer']