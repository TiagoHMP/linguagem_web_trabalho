import peewee
from app import db
from app.dominio.entidade.usuario import Usuario

class Usuario(peewee.Model):

    id = peewee.IntegerField(primary_key=True, unique=True)
    login = peewee.CharField()
    senha = peewee.CharField()

    class Meta:
        database = db