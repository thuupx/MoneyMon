from rest_framework import serializers
from .models import Wallet, Categories


class WalletSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(), read_only=True)
    wallet_type = serializers.ChoiceField(choices=Wallet.WALLET_TYPES)
    wallet_type_name = serializers.SerializerMethodField()

    class Meta:
        model = Wallet
        fields = '__all__'

    def get_wallet_type_name(self, obj):
        return obj.get_wallet_type_display()


class CategoriesSerializer(serializers.ModelSerializer):
    # cat_types = serializers.ChoiceField(choices=Categories.CATEGORIES_TYPES)
    # cat_types_name = serializers.SerializerMethodField()

    class Meta:
        model = Categories
        fields = '__all__'

    # def get_cat_types_name(self, obj):
    #     return obj.get_cat_types_display()
