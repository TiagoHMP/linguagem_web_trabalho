from app import db
from app.infraestrutura.mapping.projetoMap import projetoMap
from app.infraestrutura.mapping.usuarioMap import Usuario as usuarioMap
import peewee

class usuarioProjetoMap(peewee.Model):
    id = peewee.IntegerField(unique=True, primary_key=True)
    usuario = peewee.ForeignKeyField(usuarioMap)
    projeto = peewee.ForeignKeyField(projetoMap)


    class Meta:
        database = db
