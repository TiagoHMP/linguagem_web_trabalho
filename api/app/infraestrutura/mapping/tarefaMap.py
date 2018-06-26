import peewee
from app.dominio.entidade.tarefa import tarefa as tarefaEntiti
from app.infraestrutura.mapping.clienteMap import cliente
from app.infraestrutura.mapping.usuarioMap import Usuario as usuario
from app import db

class tarefa(peewee.Model):
    id = peewee.IntegerField(primary_key=True, unique=True)
    usuario = peewee.ForeignKeyField(usuario)
    projeto = peewee.IntegerField()
    horaInicio = peewee.TextField()
    horaFim = peewee.TextField()
    data = peewee. DateField()

    class Meta:
        database = db


    def getValues(self):
        return tarefaEntiti(
            self.id,
            self.usuario,
            self.Projeto,
            self.horaInicio,
            self.horaFim,
            self.data
        )

