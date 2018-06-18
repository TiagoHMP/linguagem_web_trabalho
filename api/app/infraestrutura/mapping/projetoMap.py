import peewee
from app import db
from app.infraestrutura.mapping.clienteMap import cliente
from app.dominio.entidade.projeto import projeto as projetoEntity

class projetoMap(peewee.Model):
    id = peewee.IntegerField(primary_key=True, unique=True)
    cliente = peewee.ForeignKeyField(cliente)
    nome = peewee.TextField()
    descricao = peewee.TextField()

    def getValues(self):
        return projetoEntity(
            self.id,
            self.cliente,
            self.nome,
            self.descricao
        )

    class Meta:
        database = db
