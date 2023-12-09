from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from controllers.userController import *
from controllers.stationController import *
from controllers.vehicleController import *
from controllers.rootEndpoint import *

# app config
app = Flask("ProjectEasyExams")

# allow CORS
CORS(app)

# make api
api = Api(app)

# must be mentioned in every endpoint
baseURL = "/api"


@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)


# endpoint routing
api.add_resource(RootEndpoint, baseURL + "/")
api.add_resource(LoginEndpoint, baseURL + "/login")
api.add_resource(GetStationsEndpoint, baseURL + "/stations")
api.add_resource(GetVehiclesEndpoint, baseURL + "/vehicles")
api.add_resource(UpdateVehicleEndpoint, baseURL + "/vehicle/<int:vehicleId>/update")
api.add_resource(AddVehicleEndpoint, baseURL + "/vehicle")

# run app
if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8000)
    