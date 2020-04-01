from django.shortcuts import render
from rest_framework_mongoengine.viewsets import ModelViewSet as MongoModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response

from wallet.serializers import WalletSerializer
from wallet.models import Wallet


class WalletViewSet(MongoModelViewSet):
    serializer_class = WalletSerializer
    lookup_field = 'id'

    def get_queryset(self):
        print("wallet", Wallet.balance)
        return Wallet.objects.all()

    # @action(method="post", detail=True, permission_classes=[], url_path="/create")
    # def create_wallet(self, request):
    #     print(request)
