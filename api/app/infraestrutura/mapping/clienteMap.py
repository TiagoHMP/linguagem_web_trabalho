import peewee
from app import db
from app.dominio.entidade.cliente import Cliente

class cliente(peewee.Model):
    id = peewee.IntegerField(primary_key=True, unique=True)
    nome = peewee.CharField()
    apelido = peewee.CharField()
    cnpj = peewee.IntegerField()

    def getValues(self):
        return Cliente(self.id, self.nome, self.apelido, self.cnpj)

    class Meta:
        database = db