# from rest_framework import serializers
from rest_framework_mongoengine import serializers

from .models import Wallet


class WalletSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Wallet
        fields = '__all__'
