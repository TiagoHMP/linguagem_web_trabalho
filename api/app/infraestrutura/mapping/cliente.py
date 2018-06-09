import peewee
from app import db
from app.dominio.entidade.cliente import Cliente

class cliente(peewee.Model):
    id = peewee.IntegerField(primary_key=True, unique=True)
    nome = peewee.CharField()

    def getValues(self):
        return Cliente(self.id, self.nome)

    class Meta:
        database = db