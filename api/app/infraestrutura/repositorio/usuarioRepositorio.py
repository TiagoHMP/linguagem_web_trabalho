from app.infraestrutura.mapping.usuarioMap import Usuario
from app.dominio.entidade.usuario import Usuario as UsuarioEntity

class UsuarioRepositorio:

    def __init__(self):
        pass

    def buscar_usuario(id):
        user = Usuario.get(Usuario.id == id)
        resposta = UsuarioEntity(user.id, user.login, user.senha)
        return resposta.get_values()
