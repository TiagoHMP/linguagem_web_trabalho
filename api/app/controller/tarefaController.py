from app import app, request


@app.route('/tarefa/salvar', methods=['POST'])
def novo_usuario():
    content = request.json
    return "ok"