from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.utils.translation import ugettext as _

from rest_framework import serializers
from rest_framework.authtoken.models import Token


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_passwords = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ("id", "username", "email", "password",
                  "confirm_password", "date_joined")

        def validate(self, attrs):
            if attrs.get("password") != attrs.get("confirm_password"):
                raise serializers.ValidationError(
                    "Confirm password does not match")
            del attrs["confirm_password"]
            attrs["password"] = make_password(attrs.get("password"))
            return attrs


class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def __init__(self, *args, **kwargs):
        super(UserLoginSerializer, self).__init__(*args, **kwargs)
        self.user = None

    def validate(self, attrs):
        self.user = authenticate(username=attrs.get(
            'username'), password=attrs.get("password"))
        if self.user:
            if not self.user.is_active:
                raise serializers.ValidationError("User is not active")
            return attrs
        else:
            raise serializers.ValidationError(
                "Login failed for provided credentials")


class TokenSerializer(serializers.ModelSerializer):
    auth_token = serializers.CharField(source='key')

    class Meta:
        model = Token
        fields = ('auth_token', 'created')
