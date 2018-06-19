from app.infraestrutura.mapping.clienteMap import cliente as clienteMap

class clienteRepositorio():

    def __init__(self):
        pass

    @staticmethod
    def cadastrar(cliente):
        novoCliente = clienteMap(
            nome = cliente['nome'],
            apelido = cliente['apelido'],
            cnpj = cliente['cnpj']
        )

        novoCliente.save()

    @staticmethod
    def buscarTodosClientes():
       retorno = clienteMap.select().where(clienteMap.id > 0)
       retorno = list(retorno)
       return retorno


    @staticmethod
    def buscaClientePorNome(nome):
        clientes = clienteMap.select().where(clienteMap.nome.contains(nome))
        retorno = []
        for cliente in clientes:
            newCliente = cliente.getValues()
            retorno.append(newCliente.getValues())

        return list(retorno)
