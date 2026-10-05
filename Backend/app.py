import mysql.connector
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# دالة الاتصال بقاعدة البيانات MySQL
def get_db_connection():
    return mysql.connector.connect(
        host="localhost", user="root", password="", database="users"
    )


# Endpoint واحدة لتسجيل الدخول المباشر
@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    email_saisi = data.get("email")
    password_saisi = data.get("password")

    # التحقق من أن المستخدم أدخل البيانات
    if not email_saisi or not password_saisi:
        return (
            jsonify({"error": "L'adresse email et le mot de passe sont requis."}),
            400,
        )

    try:
        connexion = get_db_connection()
        curseur = connexion.cursor(dictionary=True)

        # البحث عن المستخدم بالإيميل والباسورد
        requete = "SELECT * FROM users WHERE email = %s AND password = %s"
        curseur.execute(requete, (email_saisi, password_saisi))
        utilisateur = curseur.fetchone()

        curseur.close()
        connexion.close()

        # إذا لم يتم العثور على المستخدم
        if not utilisateur:
            return jsonify({"error": "Identifiants incorrects."}), 401

        # تسجيل الدخول بنجاح وإرجاع بيانات المستخدم (بدون أي كود تحقق)
        return (
            jsonify(
                {
                    "message": "Connexion réussie !",
                    "user": {
                        "id": utilisateur.get("id"),
                        "username": utilisateur.get("username"),
                        "email": utilisateur.get("email"),
                        # إذا كان عندك حقل القسم (department) ف MySQL تقدر تزيده هنا:
                        # "department": utilisateur.get("department")
                    },
                }
            ),
            200,
        )

    except Exception as e:
        return (
            jsonify({"error": f"Erreur lors du traitement de la connexion: {e}"}),
            500,
        )


if __name__ == "__main__":
    app.run(debug=True, port=5000)
