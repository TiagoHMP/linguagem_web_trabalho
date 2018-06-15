import peewee
from app import db
from app.dominio.entidade.usuario import Usuario as usuarioEntity

class Usuario(peewee.Model):

    id = peewee.IntegerField(primary_key=True, unique=True)
    login = peewee.CharField()
    senha = peewee.BlobField()
    tipoUsuario = peewee.CharField()

    def getValues(self):
        return usuarioEntity(
            self.id,
            self.login,
            '',
            self.tipoUsuario
        )


    class Meta:
        database = db