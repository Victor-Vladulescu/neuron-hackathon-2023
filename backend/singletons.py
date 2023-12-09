from sqlalchemy import *
import os

try:
    #f = open("credentials.txt", "r")
    #dbstring = f.read().replace("\n", "")
    dbstring = os.environ['DB']
    engine = create_engine(dbstring, echo=False)
except Exception as e:
    print(e)
    exit()
