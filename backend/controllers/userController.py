from flask_restful import Resource, reqparse
from singletons import *
from repositories.userRepo import *

class LoginEndpoint(Resource):
    
    def post(self):

        parser = reqparse.RequestParser(bundle_errors=True)

        parser.add_argument('username', type=str, required=True)
        parser.add_argument('password', type=str, required=True)

        args = parser.parse_args()

        user = login(args['username'], args['password'])
        
        if not user == null:
            return { "message": "Access granted", "user": user }, 200
        else:
            return { "message": "Invalid credentials" }, 401