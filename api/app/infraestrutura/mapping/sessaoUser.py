import peewee
from app import db
from app.infraestrutura.mapping.usuarioMap import Usuario

class SessaoUser(peewee.Model):
    id = peewee.IntegerField(primary_key=True, unique=True)
    usuario = peewee.ForeignKeyField(Usuario)
    token = peewee.TextField()


    def getValues(self):
        return {
            "usuario": self.usuario.getValues(),
            "token": self.token
        }

    class Meta:
        database = db