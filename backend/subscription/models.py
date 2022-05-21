import datetime

from django.db import models

from wagtail.admin import widgets
from modelcluster.models import ClusterableModel
from modelcluster.fields import ParentalKey
from wagtail.core.models import Orderable
from wagtail.admin.edit_handlers import (
    InlinePanel,
    FieldPanel,
    ObjectList,
    TabbedInterface,
)

from user.models import User


# 사용자 좋아요 모델
class UserSubscription(Orderable):
    user_subscription = ParentalKey(
        'Subscription',
        related_name = 'user_subscription',
        on_delete=models.CASCADE,
        null=True
    )
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=False,
        verbose_name="사용자"
    )

    panels = [
        FieldPanel('user')
    ]

    class Meta:
        verbose_name_plural = '사용자들'
        verbose_name = '사용자'


# 청약 모델
class Subscription(ClusterableModel):
    expiry = models.BooleanField(default=False, verbose_name='만료')
    sub_id = models.IntegerField(default=0, verbose_name='공고 번호')
    name = models.CharField(
        max_length=500,
        null=True,
        verbose_name="건물명",
        blank=False
    )
    end_date = models.DateField(
        null=False,
        verbose_name="청약 종료 날짜",
        default=datetime.date.today
        )
    address = models.CharField(
        max_length=100,
        null=True,
        verbose_name='건물 주소',
        blank=False
    )
    date_widget = widgets.AdminDateInput(attrs = {'placeholder': 'dd-mm-yyyy'})

    panels = [
        FieldPanel('expiry'),
        FieldPanel('sub_id'),
        FieldPanel('name'),
        FieldPanel('address'),
        FieldPanel('end_date', widget=date_widget),
    ]

    like_panels = [
        InlinePanel('user_subscription', label="사용자"),
    ]

    edit_handler = TabbedInterface(
        [
            ObjectList(panels, heading="청약 정보"),
            ObjectList(like_panels, heading="좋아요를 누른 사용자들"),
        ]
    )

    class Meta:
        verbose_name_plural = '청약'
        verbose_name = '청약'