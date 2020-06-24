from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView)
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django.db.models import Q
from .models import Transactions
from drf_renderer_xlsx.mixins import XLSXFileMixin
from drf_renderer_xlsx.renderers import XLSXRenderer
from .serializers import TransactionsSerializer


class TransactionsCreateView(viewsets.ModelViewSet):
    # queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        from_wallet = self.request.query_params.get('from_wallet')
        print("from:", from_wallet)
        category = self.request.query_params.get('category')
        qs = Transactions.objects.filter(user=self.request.user)
        if from_wallet is None:
            return qs
        # elif category is None:
        #     return qs
        else:
            qs = Transactions.objects.filter(Q(user=self.request.user) & Q(from_wallet=from_wallet) )
            return qs

    def perform_create(self, serializer):
        category = self.request.data.get('category')
        from_wallet = self.request.data.get('from_wallet')
        serializer.save(category=category,
                        from_wallet=from_wallet, user=self.request.user)

    def perform_update(self, serializer):
        category = self.request.data.get('category')
        from_wallet = self.request.data.get('from_wallet')
        if category or from_wallet:
            serializer.save(category=category, from_wallet=from_wallet)
        else:
            serializer.save()

class ExportTransactionView(XLSXFileMixin, viewsets.ReadOnlyModelViewSet):
    serializer_class = TransactionsSerializer
    renderer_classes = [XLSXRenderer]
    permission_classes = [IsAuthenticated]
    filename = 'transaction.xlsx'

    def get_queryset(self):
        return Transactions.objects.filter(user=self.request.user)