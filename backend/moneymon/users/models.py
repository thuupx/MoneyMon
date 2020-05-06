from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)