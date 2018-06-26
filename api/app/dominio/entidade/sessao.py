
class Sessao:
    id = ''
    usuario = ''
    token = ''

    def getValues(self):
        return {
            'usuario': self.usuario,
            'token': self.token
        }