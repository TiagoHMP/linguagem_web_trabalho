from app.infraestrutura.mapping.projetoMap import projetoMap
from app.infraestrutura.mapping.clienteMap import cliente as clienteMap

class projetoRepositorio():

    def __init__(self):
        pass

    @staticmethod
    def saveProject(projeto):
        newCliente = clienteMap.get(clienteMap.id == projeto['id'])
        newProject = projetoMap(
            cliente=projeto['cliente'],
            nome=projeto['nome'],
            descricao=projeto['descricao'],
        )

        newProject.save()