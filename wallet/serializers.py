from rest_framework import serializers
from rest_framework_mongoengine import serializers as mongoserializers
from wallet.models import Wallet


class WalletSerializer(mongoserializers.DocumentSerializer):

    class Meta:
        model = Wallet
        fields = '__all__'
