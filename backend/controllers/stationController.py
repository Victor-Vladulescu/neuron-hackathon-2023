from flask_restful import Resource
from singletons import *
from repositories.stationsRepository import *

class GetStationsEndpoint(Resource):
    
    def get(self):
        stations = getStations()

        return { "stations": stations }, 200