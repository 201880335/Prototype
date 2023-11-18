from flask import Flask, send_from_directory, request
import os

app = Flask(__name__, static_folder='static')

# Get the port from the PORT environment variable, default to 5000 if not set
port = int(os.environ.get("PORT", 5000))

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/profile')
def profile():
    return send_from_directory(app.static_folder, 'profile.html')

@app.route('/courses')
def courses():
    return send_from_directory(app.static_folder, 'courses.html')

@app.route('/challenges')
def challenges():
    return send_from_directory(app.static_folder, 'challenges.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Get data from form
    username = request.form['username']
    password = request.form['password']

    # Save data to file
    with open("userdata.txt", "a") as file:
        file.write(f"Username: {username}, Password: {password}\n")

    return "Data submitted successfully!"

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    try:
        with open("userdata.txt", "r") as file:
            users = file.readlines()

        for user in users:
            saved_username, saved_password = user.strip().split(", ")
            saved_username = saved_username.split(": ")[1]
            saved_password = saved_password.split(": ")[1]

            if username == saved_username and password == saved_password:
                return "Login successful!"
        
        return "Invalid username or password."

    except FileNotFoundError:
        return "User data file not found. Please sign up first."



if __name__ == '__main__':
    # app.run(debug=True)
    # app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
    app.run(host='0.0.0.0', port=port)
