from django.db import models
from django.utils import timezone


class Transactions(Document):
    name =  models.CharField(max_length=255)
    balance =  models.CharField(max_length=1024)