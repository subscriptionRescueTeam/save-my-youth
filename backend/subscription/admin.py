from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    modeladmin_register
)

from .models import Subscription


class SubscriptionAdmin(ModelAdmin):
    model = Subscription
    menu_label = '청약목록'  # ditch this to use verbose_name_plural from model
    menu_icon = 'list-ol'  # change as required
    list_display = ('sub_id', 'name',)
    search_fields = ['sub_id','name',]

modeladmin_register(SubscriptionAdmin)