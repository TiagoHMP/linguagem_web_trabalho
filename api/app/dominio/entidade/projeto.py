
class projeto():
    id = ''
    cliente = ''
    nome = ''
    descricao = ''

    def __init__(self, id, cliente, nome, descricao):
        self.id = id,
        self.nome = nome,
        self.cliente = cliente,
        self.descricao = descricao


    def getValues(self):
        return {
            "id": self.id,
            "cliente": self.cliente,
            "nome": self.nome,
            "descricao": self.descricao,
        }

    def getResponseValues(self):
        cliente = self.cliente[0].getValues()

        return {
            "id": self.id[0],
            "cliente": self.cliente[0],
            "nome": self.nome[0],
            "descricao": self.descricao,
        }