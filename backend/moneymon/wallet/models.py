from django.db import models
from django.utils import timezone
from django.conf import settings
from djmoney.models.fields import MoneyField
from djmoney.money import Money

WALLET_TYPES = (
    ("Money", "Tiền mặt"),
    ("Digital", "Ví điện tử"),
    ("Card", "Thẻ ngân hàng"),
    ("Credit", "Thẻ ghi nợ"),
)


class Wallet(models.Model):
    wallet_type = models.CharField(
        choices=WALLET_TYPES, default=WALLET_TYPES[0][1], max_length=255)
    balance = MoneyField(
        'balance', default_currency='VND', max_digits=15, default=Money(0, 'VND'))
    wallet_name = models.CharField(max_length=255)
    description = models.CharField(max_length=512)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, to_field='username')
    created_at = models.DateTimeField('Created at', auto_now=True)
    updated_at = models.DateTimeField('Updated at', auto_now=True)
    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.user = request.user
        super().save_model(request, obj, form, change)
