from sqlalchemy import *

try:
    f = open("credentials.txt", "r")
    dbstring = f.read().replace("\n", "")
    engine = create_engine(dbstring, echo=False)
except Exception as e:
    print(e)
    exit()
