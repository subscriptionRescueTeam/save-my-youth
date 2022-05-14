import datetime

from django.db import models

from wagtail.admin import widgets
from modelcluster.models import ClusterableModel
from modelcluster.fields import ParentalKey
from wagtail.core.models import Orderable
from wagtail.admin.edit_handlers import (
    InlinePanel,
    MultiFieldPanel,
    FieldPanel,
    ObjectList,
    TabbedInterface,
)

from user.models import User


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


class Subscription(ClusterableModel):
    sub_id = models.IntegerField(default=0, verbose_name='공고번호')
    name = models.CharField(
        max_length=500,
        null=True,
        verbose_name="주택명",
        blank=True
    )
    date = models.DateField(
        null=True,
        verbose_name="날짜",
        default=datetime.date.today
        ) # 파이코인 획득 날짜
    date_widget = widgets.AdminDateInput(attrs = {'placeholder': 'dd-mm-yyyy'}) # 날짜 선택 위젯

    panels = [
        MultiFieldPanel(
            [
                FieldPanel('sub_id'),
                FieldPanel('name'),
                FieldPanel('date', widget=date_widget),
            ], heading="청약 정보"
        ),
    ]

    like_panels = [
        InlinePanel('user_subscription', label="사용자"),
    ]

    edit_handler = TabbedInterface(
        [
            ObjectList(panels, heading="기본"),
            ObjectList(like_panels, heading="좋아요"),
        ]
    )

    class Meta:
        verbose_name_plural = '청약 관리'