from sqlalchemy.orm import Session
from models import Quote
from db import SessionLocal

class QuoteRepository:
    def __init__(self, session: Session):
        self.session = session

    def add_quote(self, quote: str):
        new_quote = Quote(quote=quote)
        self.session.add(new_quote)
        self.session.commit()

    def get_all_quotes(self):
        return self.session.query(Quote).all()
