from rest_framework import serializers
from .models import Usuarios
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        #fields = ('id', 'nombre', 'apellidpP', 'apellidoM', 'correo','password')
        fields = '__all__' #convierte todos los campos en un json
