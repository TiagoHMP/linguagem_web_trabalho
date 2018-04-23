from flask import Flask
from dominio.entidade.usuario import Usuario

app = Flask(__name__)


@app.route('/')
def hello_world():
    user = Usuario("10", "Rafael", "10")
    return user.login


if __name__ == '__main__':
    app.run()
