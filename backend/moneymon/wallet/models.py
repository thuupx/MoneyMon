from django.db import models
from django.utils import timezone
from django.conf import settings
from djmoney.models.fields import MoneyField
from djmoney.money import Money


class Wallet(models.Model):
    WALLET_TYPES = (
        ("BASIC", "Tiền mặt"),
        ("DIGITAL", "Ví điện tử"),
        ("CARD", "Thẻ ngân hàng"),
        ("CREDIT", "Thẻ ghi nợ"),
    )
    wallet_type = models.CharField(
        choices=WALLET_TYPES, default=WALLET_TYPES[0][0], max_length=255)
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

    def __str__(self):
        return self.wallet_name


class Categories(models.Model):
    CATEGORIES_TYPES = (
        ('bill_utils', 'Bills & Utilities'),
        ('families', 'Families'),
        ('education', 'Education'),
        ('entertainment', 'Entertainment'),
        ('health', 'Health')
    )
    cat_name = models.CharField(max_length=255, unique=True)
    # cat_types = models.CharField(max_length=255, choices=CATEGORIES_TYPES)
    cat_parent = models.ForeignKey(
        'self', null=True, blank=True, related_name="childs", on_delete=models.CASCADE)
    is_parent = models.BooleanField(default=False)

    def __str__(self):
        return self.cat_name
