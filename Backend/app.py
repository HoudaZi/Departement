import datetime
import mysql.connector
import jwt
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['SECRET_KEY'] = 'super_securisee_enosis_key_2026'

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="users"
    )

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email_saisi = data.get('email')
    password_saisi = data.get('password')
    if not email_saisi or not password_saisi:
        return jsonify({"error": "L'adresse email et le mot de passe sont requis."}), 400
    try:
        connexion = get_db_connection()
        curseur = connexion.cursor(dictionary=True)
        requete = "SELECT * FROM users WHERE email = %s AND password = %s"
        curseur.execute(requete, (email_saisi, password_saisi))
        utilisateur = curseur.fetchone()

        curseur.close()
        connexion.close()
        if not utilisateur:
            return jsonify({"error": "Identifiants incorrects."}), 401

        expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=2)
        payload = {
            'user_id': utilisateur.get('id'),
            'email': utilisateur.get('email'),
            'exp': expiration
        }
        token = jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')

        return jsonify({
            "message": "Connexion réussie !",
            "token": token,
            "user": {µ
                "id": utilisateur.get('id'),
                "username": utilisateur.get('username'),
                "email": utilisateur.get('email'),
                "department": utilisateur.get('department')
            }
        }), 200

    except Exception as e:
        return jsonify({"error": f"Erreur lors du traitement de la connexion: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)