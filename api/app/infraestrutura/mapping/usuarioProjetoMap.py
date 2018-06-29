from app import db
from app.infraestrutura.mapping.projetoMap import projetoMap
from app.infraestrutura.mapping.usuarioMap import Usuario as usuarioMap
import peewee

class usuarioProjetoMap(peewee.Model):
    usuario = peewee.ForeignKeyField(usuarioMap)
    projeto = peewee.ForeignKeyField(projetoMap)
    funcao = peewee.TextField()


    class Meta:
        database = db
