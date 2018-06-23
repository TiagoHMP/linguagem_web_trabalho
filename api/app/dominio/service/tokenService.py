from app.dominio.service.encryptService import encryptService
from random import randint

class TokenService:

    @staticmethod
    def generateToken():
        newToken = randint(10, 99999999999)
        newToken = str(newToken)
        return encryptService.encrypt(newToken)
