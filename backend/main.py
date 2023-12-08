from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from controllers.userController import *
from controllers.stationController import *
from controllers.vehicleController import *

# app config
app = Flask("ProjectEasyExams")

# allow CORS
CORS(app)

# make api
api = Api(app)

# must be mentioned in every endpoint
baseURL = "/api"

# simple endpoint
class RootEndpoint(Resource):

    def get(self):
        return { "message": "Thank you for using this API" }, 200


# endpoint routing
api.add_resource(RootEndpoint, baseURL + "/")
api.add_resource(LoginEndpoint, baseURL + "/login")
api.add_resource(GetStationsEndpoint, baseURL + "/stations")
api.add_resource(GetVehiclesEndpoint, baseURL + "/vehicles")
api.add_resource(UpdateVehicleEndpoint, baseURL + "/vehicle/<int:vehicleId>/update")
api.add_resource(AddVehicleEndpoint, baseURL + "/vehicle")

# run app
if __name__ == "__main__":
    app.run()
    