from flask import request, jsonify

class QuoteController:
    def __init__(self, quote_service):
        self.quote_service = quote_service

    def add_quote(self):
        quote = request.json.get("quote")
        self.quote_service.add_quote(quote)
        return jsonify({"success": True})

    def get_random_quote(self):
        quote = self.quote_service.get_random_quote()
        return jsonify({"quote": quote})

    def register_routes(self, app):
        app.route("/add", methods=["POST"])(self.add_quote)
        app.route("/random")(self.get_random_quote)