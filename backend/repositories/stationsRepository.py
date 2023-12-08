from sqlalchemy import text
from singletons import *

def getStations():

    with engine.connect() as conn:
        try:
            query = conn.execute(text("""SELECT id, type, name, longitude, latitude FROM public.station"""))
            
            stations = []
            
            for st in query:
                stations.append({
                    'id': st.id,
                    'type': st.type,
                    'name': st.name,
                    'longitude': st.longitude,
                    'latitude': st.latitude
            })

            return stations
        
        except:
            return null