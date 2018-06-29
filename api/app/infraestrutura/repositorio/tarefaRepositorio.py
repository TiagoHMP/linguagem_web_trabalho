from app.infraestrutura.mapping.tarefaMap import tarefa as tarefaMap
from app.infraestrutura.mapping.usuarioMap import Usuario as usuarioMap
from app.infraestrutura.mapping.projetoMap import projetoMap
from app.dominio.entidade.tarefa import tarefa as Tarefa

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


    @staticmethod
    def getTarefaPorData(datas):
        tarefas = tarefaMap.select().where(tarefaMap.data > datas['inicio'] and tarefaMap.data < datas['fim'])
        tarefas = list(tarefas)
        result = []

        for tarefa in tarefas:
            newUsuario = usuarioMap.get(usuarioMap.id == tarefa.usuario)
            newProjeto = projetoMap.get(projetoMap.id == tarefa.projeto)
            result.append(Tarefa(tarefa.id, newUsuario.getValues(), newProjeto.getValues(), tarefa.horaInicio, tarefa.horaFim, tarefa.data))

        return result