from wagtail.contrib.modeladmin.options import (
    ModelAdmin,
    modeladmin_register
)

from .models import Faq


class FaqAdmin(ModelAdmin):
    model = Faq
    menu_label = 'FAQ'
    menu_icon = 'help'
    list_display = ('question', 'answer',)
    search_fields = ['question',]

modeladmin_register(FaqAdmin)