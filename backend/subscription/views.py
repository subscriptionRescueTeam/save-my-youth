import datetime
from .models import Subscription


def expiry_check():
    #날짜 셋팅
    today = datetime.date.today()

    subscriptions = Subscription.objects.filter(expiry=False)

    if len(subscriptions) != 0:
        for sub in subscriptions:

            if sub.end_date < today:
                sub.expiry = True
                sub.save()