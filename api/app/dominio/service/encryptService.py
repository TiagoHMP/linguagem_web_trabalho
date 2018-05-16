import base64


class encryptService:

    @staticmethod
    def encrypt(texto):
        return base64.b64encode(texto.encode('utf-8'))

    @staticmethod
    def decrypt(texto):
        decode = texto
        bytes = base64.decodebytes(decode)
        return bytes.decode()