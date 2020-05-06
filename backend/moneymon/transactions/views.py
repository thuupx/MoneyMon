from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView)
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import Transactions
from .permissions import IsOwnerWalletOrReadOnly
from .serializers import TransactionsSerializer

# Create your views here.


class TransactionsCreateView(viewsets.ModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = WalletSerializer
    permission_classes = [IsAuthenticated]
