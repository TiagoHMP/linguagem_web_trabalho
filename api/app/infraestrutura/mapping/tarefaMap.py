import peewee
from app.dominio.entidade.tarefa import tarefa
from app import db

class tarefa(peewee.Model):
    idCliente = peewee.IntegerField()
    idProjeto = peewee.IntegerField()
    horaInicio = peewee.TextField()
    horaFim = peewee.TextField()
    data = peewee. DateField()

    class Meta:
        database = db


    def getValues(self):
        return tarefa(
            self.idCliente,
            self.idProjeto,
            self.horaInicio,
            self.horaFim,
            self.data
        )

