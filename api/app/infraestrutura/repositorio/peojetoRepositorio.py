from app.infraestrutura.mapping.projetoMap import projetoMap
from app.infraestrutura.mapping.clienteMap import cliente as clienteMap
from app.dominio.entidade.projeto import projeto as ProjetoEntity

class projetoRepositorio():

    def __init__(self):
        pass

    @staticmethod
    def saveProject(projeto):
        newCliente = clienteMap.get(clienteMap.id == projeto['cliente']['id'])
        newProject = projetoMap(
            cliente=newCliente,
            nome=projeto['nome'],
            descricao=projeto['descricao'],
        )
        newProject.save()

    @staticmethod
    def getProjetoPorIdCliente(idCliente):
        id = int(idCliente)
        projetos = list(projetoMap.select().where(projetoMap.cliente == id))
        retorno = []
        for projeto in projetos:
            cliente = projeto.cliente.getValues()
            newProjeto = ProjetoEntity(projeto.id, cliente ,projeto.nome, projeto.descricao).getResponseValues()
            retorno.append(newProjeto);

        return retorno