from app import app


@app.route('/')
def testando():
    return 'work'