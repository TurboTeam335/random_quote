import sqlite3
import random

# Connect to the database
conn = sqlite3.connect("quotes.db")

# Create a cursor
cursor = conn.cursor()

# Retrieve a random quote from the database
cursor.execute("SELECT quote FROM quotes ORDER BY RANDOM() LIMIT 1")

# Fetch the quote
quote = cursor.fetchone()[0]

# Close the connection to the database
conn.close()

# Print the quote
print(quote)