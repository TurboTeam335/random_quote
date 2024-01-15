from sqlalchemy import create_engine
from models import Base, Quote

DATABASE_URL = "sqlite:///quotes.db"
engine = create_engine(DATABASE_URL)

Base.metadata.create_all(bind=engine)
