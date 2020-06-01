"""moneymon URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from wallet import views as wallet_views
from transactions import views as transaction_views

router = routers.DefaultRouter(trailing_slash=False)

router.register(r'wallet', wallet_views.WalletCreateView, 'wallet')
router.register(
    r'transaction', transaction_views.TransactionsCreateView, 'transaction')
router.register(r'category', wallet_views.CategoryView, 'category')
urlpatterns = [
    path(r'admin/', admin.site.urls),
    # path(r'auth/', include('djoser.urls')),
    path(r'auth/', include('rest_framework_social_oauth2.urls')),
    # path(r'auth/', include('djoser.urls.jwt')),
    path(r'api/', include(router.urls))
]
