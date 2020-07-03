from django.db import models
from django.utils import timezone
from django.conf import settings
from djmoney.models.fields import MoneyField
from wallet.models import Categories, Wallet


class Transactions(models.Model):
    ACTIONS = (
        ('IN', 'Cộng'),
        ('OUT', 'Trừ')
    )
    name = models.CharField(max_length=255)
    amount = MoneyField('amount', default_currency='VND', max_digits=15)
    action = models.CharField(
        max_length=255, choices=ACTIONS)
    created_at = models.DateTimeField('Created at', auto_now=True)
    category = models.ForeignKey(
        Categories, on_delete=models.CASCADE, related_name='category')
    from_wallet = models.ForeignKey(
        Wallet, on_delete=models.CASCADE, related_name='from_wallet')
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, to_field='username')

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.user = request.user
        super().save_model(request, obj, form, change)

    def __str__(self):
        return self.name


