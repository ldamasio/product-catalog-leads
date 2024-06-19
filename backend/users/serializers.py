from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Detalhes

User = get_user_model()

class DetalhesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detalhes
        fields = [
            'nome', 'estado_civil', 'rg_numero', 'rg_orgexp', 'rg_dataemissao', 
            'cpf', 'datanasc', 'celular', 'renda', 'mae', 'pai', 
            'nacionalidade', 'residencia_estado', 'residencial_cidade', 
            'classe_profissional', 'profissao', 'valor_patrimonio', 'pep', 
            'fatca', 'telefones_adicionais', 'nome_referencia', 'telefone_referencia'
        ]

class UserSerializer(serializers.ModelSerializer):
    detalhes = DetalhesSerializer()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'is_parceiro', 'detalhes')

class RegisterSerializer(serializers.ModelSerializer):
    detalhes = DetalhesSerializer()

    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'is_parceiro', 'detalhes')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        detalhes_data = validated_data.pop('detalhes')
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            is_parceiro=validated_data['is_parceiro']
        )
        Detalhes.objects.create(user=user, **detalhes_data)
        return user
