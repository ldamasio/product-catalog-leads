from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    is_parceiro = models.BooleanField(default=False)

class Detalhes(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    parceiroFullname = models.CharField(max_length=255, blank=True)
    parceiroEmail = models.CharField(max_length=255, blank=True)
    nome = models.CharField(max_length=255)
    estado_civil = models.CharField(max_length=100)
    rg_numero = models.CharField(max_length=20)
    rg_orgexp = models.CharField(max_length=50)
    cpf = models.CharField(max_length=14)
    datanasc = models.DateField()
    celular = models.CharField(max_length=15)
    renda = models.DecimalField(max_digits=10, decimal_places=2)
    mae = models.CharField(max_length=255)
    pai = models.CharField(max_length=255)
    nacionalidade = models.CharField(max_length=100)
    residencia_estado = models.CharField(max_length=100)
    residencial_cidade = models.CharField(max_length=100)
    classe_profissional = models.CharField(max_length=100)
    profissao = models.CharField(max_length=100)
    valor_patrimonio = models.DecimalField(max_digits=15, decimal_places=2)
    pep = models.BooleanField(default=False)
    fatca = models.BooleanField(default=False)
    telefones_adicionais = models.TextField(blank=True)
    nome_referencia = models.CharField(max_length=255)
    telefone_referencia = models.CharField(max_length=15)

    def __str__(self):
        return f"{self.nome} - {self.user.username}"
