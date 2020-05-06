from django.contrib import admin
from .models import Wallet, Categories


class WalletAdmin(admin.ModelAdmin):
    pass


models = [Wallet, Categories]

admin.site.register(models, WalletAdmin)
