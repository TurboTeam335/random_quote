from flask import Flask, request, jsonify, send_from_directory
from db import SessionLocal
from service import QuoteService
from repository import QuoteRepository
import os
from flask_cors import CORS  

app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app)  

# Create a new SessionLocal instance
session = SessionLocal()

# Pass the session to QuoteRepository
quote_repository = QuoteRepository(session)

quote_service = QuoteService(quote_repository)

@app.route("/add", methods=["POST"])
def add_quote():
    quote = request.json.get("quote")
    quote_service.add_quote(quote)
    return jsonify({"success": True})

@app.route("/random")
def get_random_quote():
    quote = quote_service.get_random_quote()
    return jsonify({"quote": quote})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 4000)))

