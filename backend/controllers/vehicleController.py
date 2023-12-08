from flask_restful import Resource, reqparse
from singletons import *
from repositories.vehicleRepository import *

class GetVehiclesEndpoint(Resource):
    
    def get(self):
        vehicles = getAllVehicles()

        if not vehicles == null:
            return { "vehicles": vehicles }, 200
        else:
            return { "message": "Can't get any vehicles for some reason" }, 500

    def post(self):

        parser = reqparse.RequestParser(bundle_errors=True)

        parser.add_argument('vehicleIds', type=list, location='json', required=True)
        args = parser.parse_args()

        vehicles = getVehicles(args['vehicleIds'])

        if not vehicles == null:
            return { "vehicles": vehicles }, 200
        else:
            return { "message": "Can't get any vehicles for some reason" }, 500
        

class UpdateVehicleEndpoint(Resource):

    def put(self, vehicleId):
        parser = reqparse.RequestParser(bundle_errors=True)

        parser.add_argument('latitude', type=float, required=True)
        parser.add_argument('longitude', type=float, required=True)
        parser.add_argument('timestamp', required=True)
        args = parser.parse_args()

        # update vehicle
        status = updateVehicle(vehicleId, args['latitude'], args['longitude'], args['timestamp'])

        # add to history
        addHistory(vehicleId, args['latitude'], args['longitude'], args['timestamp'])

        if not status == null:
            return { "message": "Updated" }, 200
        else:
            return { "message": "Could not update vehicle"}, 500
        

class AddVehicleEndpoint(Resource):

    def post(self):
        parser = reqparse.RequestParser(bundle_errors=True)

        parser.add_argument('type', type=int, required=True)
        parser.add_argument('name', type=str, required=True)
        args = parser.parse_args()

        vehicleId = addVehicle(args['type'], args['name'])

        if not vehicleId == null:
            return { "id": vehicleId }, 200
        else:
            return { "message": "Could not add vehicle" }, 500
