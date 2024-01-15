from flask import Flask, request, jsonify
from db import SessionLocal
from service import QuoteService
from repository import QuoteRepository
import os
from flask_cors import CORS  

app = Flask(__name__)
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

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 4000)))
