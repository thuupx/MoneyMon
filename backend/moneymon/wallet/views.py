from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView)
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Wallet
from .permissions import IsOwnerWalletOrReadOnly
from .serializers import WalletSerializer



class WalletCreateView(viewsets.ModelViewSet):
    serializer_class = WalletSerializer
    permission_classes = [IsAuthenticated, IsOwnerWalletOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        qs = Wallet.objects.filter(user=self.request.user)
        return qs

    def destroy(self, request, *args, **kwargs):
            instance = self.get_object()
            self.perform_destroy(instance)
            return Response(status=status.HTTP_200_OK)

    def perform_destroy(self, instance):
        instance.delete()

