from sqlalchemy import *

try:
    f = open("credentials.txt", "r")
    engine = create_engine(f.read(), echo=False)
except Exception as e:
    print(e)
    exit()
