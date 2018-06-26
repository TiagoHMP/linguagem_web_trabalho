from app.infraestrutura.mapping.tarefaMap import tarefa as tarefaMap
from app.infraestrutura.mapping.usuarioMap import Usuario as usuarioMap
from app.infraestrutura.mapping.projetoMap import projetoMap

class tarefaRepositorio():

    def __init__(self):
        pass


    @staticmethod
    def save(tarefa):
        newUsuario = usuarioMap.get(usuarioMap.id == tarefa['usuario']['id'])
        newProjeto = projetoMap.get(projetoMap.id == tarefa['projeto']['id'])
        novaTarefa = tarefaMap(
            usuario=newUsuario,
            projeto=newProjeto,
            horaInicio=tarefa['horaInicio'],
            horaFim=tarefa['horaFim'],
            data=tarefa['data']
         )
        novaTarefa.save()