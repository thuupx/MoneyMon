from django.contrib import admin

from .models import Transactions
from data_seeder.admin import DataGeneratorAdmin
# Register your models here.
admin.site.register(Transactions)