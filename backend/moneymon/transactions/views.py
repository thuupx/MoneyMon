from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView)
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import Transactions
from .serializers import TransactionsSerializer


class TransactionsCreateView(viewsets.ModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        category = self.request.data.get('category')
        from_wallet = self.request.data.get('from_wallet')
        serializer.save(category=category, from_wallet=from_wallet)

    # def perform_update(self, serializer):
    #     category = self.request.data.get('category')
    #     from_wallet = self.request.data.get('from_wallet')
    #     serializer.save(category=category, from_wallet=from_wallet)
