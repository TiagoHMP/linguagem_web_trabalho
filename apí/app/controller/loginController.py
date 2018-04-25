from app import app, request, jsonify

@app.route('/login', methods=['POST'])
def verificaDadosDoLogin():
    user = request.json
    return 'usuario'

