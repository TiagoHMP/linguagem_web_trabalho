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