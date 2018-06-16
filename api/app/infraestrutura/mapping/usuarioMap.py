import peewee
from app import db
from app.dominio.entidade.usuario import Usuario as usuarioEntity

class Usuario(peewee.Model):

    id = peewee.IntegerField(primary_key=True, unique=True)
    login = peewee.CharField(unique=True)
    senha = peewee.BlobField()
    tipoUsuario = peewee.CharField()
    matricula = peewee.CharField(unique=True)

    def getValues(self):
        return usuarioEntity(
            self.id,
            self.login,
            '',
            self.tipoUsuario,
            self.matricula
        )


    class Meta:
        database = db