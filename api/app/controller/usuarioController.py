from app import app
from app.dominio.entidade.usuario import Usuario

@app.route('/')
def home():
    user = Usuario('10', '1235', 'Rafael')
    return user.login