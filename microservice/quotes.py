import sqlite3

# Connect to the database
conn = sqlite3.connect("quotes.db")

# Insert a new quote into the database
cursor = conn.cursor()
cursor.execute("INSERT INTO quotes (quote) VALUES (?)", ("This is a quote.",))
conn.commit()

# Retrieve a random quote from the database
cursor = conn.cursor()
cursor.execute("SELECT quote FROM quotes ORDER BY RANDOM() LIMIT 1")
quote = cursor.fetchone()[0]
print(quote)

# Retrieve all of the quotes from the database
cursor = conn.cursor()
cursor.execute("SELECT quote FROM quotes")
quotes = cursor.fetchall()
for quote in quotes:
    print(quote)

# Close the connection to the database
conn.close()