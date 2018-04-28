class Response:
    data = ''

    def __init__(self, data):
        self.data = data

    def get_data(self):
        return {"data": self.data}