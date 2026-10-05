import random
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
import mysql.connector

app = Flask(__name__)
CORS(app)

app.config["MAIL_SERVER"] = "smtp.gmail.com" 
app.config["MAIL_PORT"] = 587
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = "houdazine37@gmail.com" 

app.config["MAIL_PASSWORD"] = "gycexqpgfspgvqlu"


app.config["MAIL_DEFAULT_SENDER"] = "houdazine37@gmail.com"
mail = Mail(app)
codes_verification = {}

def get_db_connection():
    return mysql.connector.connect(
        host="localhost", 
        user="root", 
        password="", 
        database="users"
    )

@app.route("/api/send-code", methods=["POST"])
def send_code():
    data = request.json
    email_saisi = data.get("email")
    password_saisi = data.get("password")

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

        verification_code = str(random.randint(100000, 999999))

        codes_verification[email_saisi] = verification_code

        msg = Message("Votre code de vérification", recipients=[email_saisi])
        msg.body = f"Bonjour, votre code de vérification est : {verification_code}"
        mail.send(msg)

        print(f"\n==========================================")
        print(f"📩 CODE ENVOYÉ À {email_saisi} : {verification_code}")
        print(f"==========================================\n")

        return jsonify({"message": "Code envoyé avec succès par email."}), 200

    except Exception as e:
        return jsonify({"error": f"Erreur lors du traitement ou de l'envoi: {e}"}), 500


@app.route("/api/verify-code", methods=["POST"])
def verify_code():
    data = request.json
    email = data.get("email")
    code_entre = data.get("code")

    if not email or not code_entre:
        return jsonify({"error": "Données incomplètes."}), 400


    if email in codes_verification and codes_verification[email] == str(code_entre):
        del codes_verification[email]
        return jsonify({"message": "Vérification réussie !"}), 200
    else:
        return jsonify({"error": "Code incorrect ou expiré."}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5000)
