from app.infraestrutura.mapping.usuarioMap import Usuario
from app.dominio.entidade.usuario import Usuario as UsuarioEntity


class UsuarioRepositorio:

    def __init__(self):
        pass

    @staticmethod
    def buscar_usuario(login):

        try:
            user = Usuario.get(Usuario.login == login.upper())
            resposta = UsuarioEntity(user.id, user.login, user.senha, user.tipoUsuario)

            if resposta.validar_usuario(user):
                return resposta.get_values()

            return UsuarioEntity()

        except:
            return UsuarioEntity()