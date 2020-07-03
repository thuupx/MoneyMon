from django.contrib import admin
from .models import Wallet, Categories
from data_seeder.admin import DataGeneratorAdmin

class WalletAdmin(admin.ModelAdmin):
    pass


models = [Wallet, Categories]

admin.site.register(models, DataGeneratorAdmin)
