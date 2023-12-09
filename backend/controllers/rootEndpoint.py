
from flask_restful import Resource
from singletons import *
from repositories.stationsRepository import *

class RootEndpoint(Resource):

    def get(self):
        return { "message": "Thank you for using this API" }, 200

