from app.infraestrutura.mapping.sessaoUser import SessaoUser
from app.infraestrutura.mapping.usuarioMap import Usuario
from app.dominio.entidade.usuario import Usuario as UsuarioEntity
from app.dominio.service.encryptService import encryptService
from app.dominio.service.tokenService import TokenService
from app.dominio.entidade.sessao import Sessao as SessaoEntity



class UsuarioRepositorio:

    def __init__(self):
        pass

    @staticmethod
    def buscar_usuario(user):
        token = TokenService.generateToken()
        try:
            savedUser = Usuario.get(Usuario.login == user['login'].upper())
            resposta = UsuarioEntity(user['id'], user['login'], user['senha'], user['tipoUsuario'])

            if resposta.validar_usuario(savedUser):
                sessao = SessaoUser(
                    usuario=savedUser,
                    token=token
                )
                sessao.save()
                return sessao.getValues()

            return UsuarioEntity()


        except:
            return UsuarioEntity()


    @staticmethod
    def cadastrar_usuario(user):
        newUser = UsuarioRepositorio.buscar_usuario(user)
        encodeSenha = encryptService.encrypt(user['senha'])

        if newUser.id == '':

            cadastrar = Usuario(
                login = user['login'].upper(),
                senha = encodeSenha,
                tipoUsuario = user['tipoUsuario'].upper(),
                matricula = user['matricula']
            )

            cadastrar.save()
        else:
            return UsuarioEntity()

    @staticmethod
    def criarAdmin():
        usuario = {
            'id': '',
            'login': 'admin',
            'senha': '12345',
            'tipoUsuario':'M',
            'matricula': 0
        }
        UsuarioRepositorio.cadastrar_usuario(usuario)


    @staticmethod
    def verificarUsuarioLogado(sessao):
        try:
            newUser = Usuario.get(Usuario.id == sessao['usuario']['id'])
            newSessao = SessaoUser.get(SessaoUser.usuario == newUser and SessaoUser.token == sessao['token'])
            if(newSessao.id != ''):
                return True

            return False
        except:
            return False
