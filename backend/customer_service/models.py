from django.db import models

from wagtail.admin.edit_handlers import (
    FieldPanel,
)
from wagtail.snippets.models import register_snippet


@register_snippet
class FaqCategory(models.Model):
    category_name = models.CharField(null=False, blank=True, max_length=150, verbose_name='카테고리 제목')

    panels = [
        FieldPanel('category_name'),
    ]

    def __str__(self):
        return self.category_name

    class Meta:
        verbose_name_plural = 'FAQ 카테고리'
        verbose_name = 'FAQ 카테고리'


class Faq(models.Model):
    faq_category = models.ForeignKey(
        FaqCategory,
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    question = models.CharField(null=True, blank=False, max_length=500, verbose_name='질문')
    answer = models.CharField(null=True, blank=False,
                              max_length=1000, verbose_name='답변')

    panels = [
        FieldPanel('faq_category'),
        FieldPanel('question'),
        FieldPanel('answer')
    ]

    class Meta:
        verbose_name_plural = 'Faq'
        verbose_name = 'Faq'