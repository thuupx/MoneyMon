from django.contrib import admin
from .models import Wallet


class WalletAdmin(admin.ModelAdmin):
    pass
    


admin.site.register(Wallet, WalletAdmin)
