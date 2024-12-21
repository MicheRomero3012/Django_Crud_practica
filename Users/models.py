from django.db import models

# Create your models here.
class Usuarios (models.Model):
    nombre = models.CharField(max_length=25)
    apellidoP = models.CharField(max_length=15)
    apellidoM = models.CharField(max_length=15)
    correo = models.CharField(max_length=60, unique=True)
    password = models.CharField(max_length=30)

def __str__(self):
    return self.nombre

