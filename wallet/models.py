from django.db import models
from mongoengine import Document, EmbeddedDocument, fields
# Create your models here.


class Wallet(Document):
    balance = fields.StringField(default=0)
    wallet_name = fields.StringField(max_length=255)
    wallet_type = fields.ListField(default=["bank", "credit"])
    description = fields.StringField()
