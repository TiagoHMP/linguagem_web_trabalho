import peewee
from app import db

class Usuario(peewee.Model):

    id = peewee.IntegerField(primary_key=True, unique=True)
    login = peewee.CharField()
    senha = peewee.CharField()
    tipoUsuario = peewee.CharField()


    class Meta:
        database = db