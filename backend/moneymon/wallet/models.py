# from django.db import models
from mongoengine import Document, EmbeddedDocument, fields
from django.utils import timezone


class Wallet(Document):
    wallet_type = fields.StringField(max_length=255)
    wallet_name = fields.StringField(max_length=1024)
    description = fields.StringField(max_length=2048)