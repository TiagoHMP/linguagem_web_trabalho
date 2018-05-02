class Usuario:
    id = ''
    login = ''
    senha = ''

    def __init__(self, id, login, senha=''):
        self.id = id
        self.login = login
        self.senha = senha

    def get_values(self):
        return{
            "id":self.id,
            "login": self.login
        }