from rest_framework import serializers
from .models import Transactions
from wallet.models import Wallet, Categories
from wallet.serializers import CategoriesSerializer, WalletSerializer
from rest_framework.utils import model_meta
from rest_framework.exceptions import NotFound
from djmoney.money import Money


class TransactionsSerializer(serializers.ModelSerializer):
    action = serializers.ChoiceField(choices=Transactions.ACTIONS)
    action_name = serializers.SerializerMethodField()
    # category = serializers.StringRelatedField()
    # from_wallet = serializers.StringRelatedField()
    category_name = serializers.StringRelatedField(source='category')
    from_wallet_name = serializers.StringRelatedField(source='from_wallet')
    user = serializers.PrimaryKeyRelatedField(
        default=serializers.CurrentUserDefault(), read_only=True)
    class Meta:
        model = Transactions
        fields = '__all__'

    def get_action_name(self, obj):
        return obj.get_action_display()

    def get_cat_name(self, obj):
        return obj.get_category_display()

    def create(self, validated_data):
        category = validated_data.get('category') 
        action = validated_data.get('action') #lấy action từ transaction
        money_in_transaction = validated_data.get('amount') #lấy tiền từ transaction
        category_id = category if category != None else 1
        wallet_id = validated_data.get('from_wallet')
        found_category = Categories.objects.filter(id=int(category_id))[0]
        found_wallet = Wallet.objects.get(id=int(wallet_id)) #lấy Wallet

        if found_category and found_wallet:
            validated_data['category'] = found_category
            validated_data['from_wallet'] = found_wallet
            #update dựa trên ví tiền
            if (action=='IN'):
                found_wallet.balance.amount += money_in_transaction
            else:
                found_wallet.balance.amount -= money_in_transaction
            
            found_wallet.save()
            transactions = Transactions.objects.create(**validated_data)
            transactions.save()
            return transactions

    def update(self, instance, validated_data):
        info = model_meta.get_field_info(instance)
        category_id = validated_data.get('category')
        wallet_id = validated_data.get('from_wallet')
        try:
            found_category = Categories.objects.get(
                id=int(category_id)) if category_id is not None else None
            if found_category:
                setattr(instance, 'category', found_category)
        except Exception:
            raise NotFound('Not found category with id %s' % category_id)
        try:
            found_wallet = Wallet.objects.get(
                id=int(wallet_id)) if wallet_id is not None else None
            if found_wallet:
                setattr(instance, 'from_wallet', found_wallet)
        except Exception:
            raise NotFound('Not found wallet with id %s' % wallet_id)
        m2m_fields = []
        for attr, value in validated_data.items():
            if attr in info.relations and info.relations[attr].to_many:
                m2m_fields.append((attr, value))
            elif attr == 'category' or attr == 'from_wallet':
                pass
            else:
                setattr(instance, attr, value)

        instance.save()
        for attr, value in m2m_fields:
            field = getattr(instance, attr)
            field.set(value)

        return instance
