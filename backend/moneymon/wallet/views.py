from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView)
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from .models import Wallet
from .permissions import IsOwnerWalletOrReadOnly
from .serializers import WalletSerializer

# Create your views here.


class WalletCreateView(viewsets.ModelViewSet):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer
    permission_classes = [IsAuthenticated]


class WalletUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer
    permission_classes = [IsOwnerWalletOrReadOnly, IsAuthenticated]


class WalletListView(RetrieveAPIView):
    queryset = Wallet.objects.all()
    serializer_class = WalletSerializer
