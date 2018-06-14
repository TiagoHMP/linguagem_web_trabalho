from app.infraestrutura.mapping.tarefaMap import tarefa as tarefaMap

class clienteRepositorio():

    def __init__(self):
        pass


    @staticmethod
    def save(tarefa):
        novaTarefa = tarefaMap(
            idCliente=tarefa['idCliente'],
            idProjeto=tarefa['idProjeto'],
            horaInicio=tarefa['horaInicio'],
            horaFim=tarefa['horaFim'],
            data=tarefa['data']
         )
        novaTarefa.save()