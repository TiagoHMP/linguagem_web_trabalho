from app import app, request, jsonify
from app.dto.responseDTO import Response



@app.route('/login', methods=['POST'])
def logar():
    user = request.json
    return jsonify(Response(user).get_data())



