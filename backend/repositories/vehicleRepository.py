from sqlalchemy import text
from singletons import *

def getAllVehicles():

    with engine.connect() as conn:
        try:
            query = conn.execute(text("""SELECT id, type, name, latitude, longitude, last_seen FROM public.vehicle;"""))
            
            vehicles = []

            for v in query:
                vehicles.append({
                    'id': v.id,
                    'type': v.type,
                    'name':  v.name,
                    'latitude': v.latitude,
                    'longitude': v.longitude
                })

            return vehicles
        
        except Exception as e:
            print(e)
            return null


def getVehicles(ids: list):
    
    with engine.connect() as conn:
        try:

            queryString = "SELECT id, type, name, latitude, longitude, last_seen FROM public.vehicle WHERE id IN ("

            i = 0
            while i < (len(ids) - 1):
                queryString += str(ids[i])
                queryString += ", "
                i += 1

            queryString += str(ids[i]) + ");"

            query = conn.execute(text(queryString))
            
            vehicles = []

            for v in query:
                vehicles.append({
                    'id': v.id,
                    'type': v.type,
                    'name':  v.name,
                    'latitude': v.latitude,
                    'longitude': v.longitude
                })

            return vehicles
        
        except Exception as e:
            print(e)
            return null
        

def addVehicle(type: id, name: str):
    with engine.connect() as conn:
        try:
            vehicle = conn.execute(text("""
                                INSERT INTO public.vehicle (type, name)
                                VALUES (:type, :name)
                                RETURNING id;
                                """), {"type": type, "name": name}).one()
            conn.commit()

            return vehicle.id
        
        except Exception as e:
            print(e)
            return null


def updateVehicle(id: int, latitude: float, longitude: float, timestamp):
     
     with engine.connect() as conn:
        try:

            result = conn.execute(text("""
                                UPDATE public.vehicle
                                SET latitude=:latitude, longitude=:longitude, last_seen=:timestamp
                                WHERE id=:id
                                """), {"latitude": latitude, "longitude": longitude, "timestamp": timestamp, "id": id})

            conn.commit()

            return True
        
        except Exception as e:
            print(e)
            return null


def addHistory(id: int, latitude: float, longitude: float, timestamp):
    
    # TODO
    # add to history table
    return null