"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Animals
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

##GET ANIMALS
@api.route('/animals', methods=['GET'])
def get_animals(): 
    all_animals = Animals.query.all()
    all_animals_serializable = list(map(lambda animal: animal.serialize(), all_animals))
    return jsonify({'animals': all_animals_serializable})

## POST ANIMALS
@api.route('/animals', methods=['POST'])
def create_animal():
    body = request.get_json()
    new_animal = Animals(name = body['name'], url = body['url'], description = body['description'])
    db.session.add(new_animal)
    db.session.commit()
    return jsonify({'user': new_animal.serialize()}), 200
