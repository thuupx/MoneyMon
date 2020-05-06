from rest_framework import serializers
from .models import Transactions
from wallet.models import Wallet, Categories
from wallet.serializers import CategoriesSerializer, WalletSerializer
from rest_framework.utils import model_meta

class TransactionsSerializer(serializers.ModelSerializer):
    action = serializers.ChoiceField(choices=Transactions.ACTIONS)
    action_name = serializers.SerializerMethodField()
    category = serializers.StringRelatedField()
    from_wallet = serializers.StringRelatedField()

    class Meta:
        model = Transactions
        fields = '__all__'

    def get_action_name(self, obj):
        return obj.get_action_display()

    def create(self, validated_data):
        category_id = validated_data.get('category')
        wallet_id = validated_data.get('from_wallet')
        found_categories = Categories.objects.filter(id=int(category_id))[0]
        found_wallet = Wallet.objects.filter(id=int(wallet_id))[0]
        if found_categories and found_wallet:
            validated_data['category'] = found_categories
            validated_data['from_wallet'] = found_wallet
            transactions = Transactions.objects.create(**validated_data)
            transactions.save()
            return transactions

    # def update(self, instance, validated_data):
    #     info = model_meta.get_field_info(instance)
    #     m2m_fields = []
    #     for attr, value in validated_data.items():
    #         if attr in info.relations and info.relations[attr].to_many:
    #             m2m_fields.append((attr, value))
    #         else:
    #             setattr(instance, attr, value)

    #     instance.save()
    #     for attr, value in m2m_fields:
    #         field = getattr(instance, attr)
    #         field.set(value)

    #     return instance
