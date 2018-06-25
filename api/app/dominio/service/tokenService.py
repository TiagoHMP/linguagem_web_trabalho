import secrets

class TokenService:

    @staticmethod
    def generateToken():
        newToken  = secrets.token_hex(20)
        return newToken
