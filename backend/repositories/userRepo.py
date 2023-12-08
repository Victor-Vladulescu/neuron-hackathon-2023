from sqlalchemy import text
from singletons import *

def login(username: str, password: str):

    with engine.connect() as conn:
        try:
            query = conn.execute(text("""
                                    SELECT id, type FROM public.user
                                    WHERE username = :username AND password = :password;
                                """), {"username": username, "password": password}).one()
            
            user = {
                'id': query.id,
                'type': query.type
            }

            return user
        
        except:
            return null