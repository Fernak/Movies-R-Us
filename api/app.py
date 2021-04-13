from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
import json

app = Flask(__name__)

# Database configuration
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'cpsc471_project_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# ------------------Authentication Database Calls ---------------#


@app.route('/signup', methods=['GET', 'POST'])
def user_signup():
    con = mysql.connection
    cur = mysql.connection.cursor()

    query = """insert into user(Email, Name, Age, Gender, Profile_pic)
            values (%(_email)s, %(_name)s, %(_age)s, %(_gender)s, %(_pic)s)"""

    requestObj = request.get_json()
    Email = requestObj['Email']
    Password = requestObj['Password']
    params = {
        '_email': Email,
        '_name': Password,
        '_age': "21",
        '_gender': '(NULL)',
        '_pic': '(NULL)'
    }
    cur.execute(query, params)
    con.commit()
    return json.dumps({'message': 'User created successfully!'})

    @app.route('/signup', methods=['GET', 'POST'])
    def user_signup():
        return
# ----------------------End of Auth Calls---------------------- #


'''
* References: 
    * https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api
    * https://flask-mysqldb.readthedocs.io/en/latest/
'''
# Getting list of movies in database (forgot if we wanted to only show movies that are offered by services the user is subscribed to)


@app.route('/programs', methods=['GET'])
def get_programs():
    if 'Type' in request.args:
        Type = request.args['Type']
    else:
        return "Error: No Uid prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM program WHERE type=%s", [Type])
    results = cur.fetchall()
    return jsonify(results)


'''
#Getting list of tvshow in database 
@app.route('/tvshows', methods=['GET'])
def get_tvshows():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM program WHERE type='TV Show'")
    results = cur.fetchall()
    return jsonify(results)
'''

# Getting details of a specific program (join and filter by program Uid)


@app.route('/programdetails', methods=['GET'])
def get_program_details():
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Uid' in request.args:
        Uid = request.args['Uid']
    else:
        return "Error: No Uid prvoided."
    cur = mysql.connection.cursor()
    cur.execute(
        "SELECT * FROM program p, program_details pd WHERE p.Uid=%s AND p.Uid=pd.Uid", [Uid])
    result1 = cur.fetchone()
    cur.execute(
        "SELECT c.Cid AS Cid, c.Name, c.Image FROM work_on w, crew c WHERE w.Uid=%s AND w.Cid=c.Cid", [Uid])
    result2 = cur.fetchall()
    cur.execute(
        "SELECT Author, Date, Rating, Description FROM reviews WHERE Uid=%s", [Uid])
    result3 = cur.fetchall()
    return {'programinfo': result1, 'programcrew': result2, 'programreviews': result3}


'''
#Getting the crew members of a specific program (join and filter by program Uid)
@app.route('/programcrew', methods=['GET'])
def get_program_crew(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Uid' in request.args:
        Uid = request.args['Uid']
    else:
        return "Error: No uuid prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT c.Name, c.Image FROM work_on w, crew c WHERE w.Uid=%s AND w.Cid=c.Cid", [Uid])
    results = cur.fetchall()
    return jsonify(results)

# Getting all reviews of a specific program 
@app.route('/programreviews', methods=['GET'])
def get_program_reviews(): 
    if 'Uid' in request.args:
        Uid = request.args['Uid']
    else:
        return "Error: No program Uid prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT Author, Date, Rating, Description FROM reviews WHERE Uid=%s", [Uid])
    results = cur.fetchall()
    return jsonify(results)
'''

# Getting details of a specific crew member (filter by program Cid)


@app.route('/crewdetails', methods=['GET'])
def get_crew_details():
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Cid' in request.args:
        Cid = request.args['Cid']
    else:
        return "Error: No Cid prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM crew WHERE Cid=%s", [Cid])
    result1 = cur.fetchone()
    cur.execute(
        "SELECT Program_name, w.Uid AS Uid, p.Image AS Image FROM crew c, work_on w, program p WHERE c.Cid=%s AND w.Cid=c.Cid AND w.Uid=p.Uid", [Cid])
    result2 = cur.fetchall()
    return {'crewinfo': result1, 'crewprograms': result2}


'''
#Getting the the list of crew members that are favourited by a specific user filter by Uid=null)
@app.route('/userfavourites', methods=['GET'])
def get_user_fav_crew(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' in request.args:
        Email = request.args['Email']
    else:
        return "Error: No user email prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT Name FROM favourites f WHERE f.Email=%s AND f.Uid IS NULL", [Email])
    results = cur.fetchall()
    return jsonify(results)

#Getting the all the movies that are favourited by a specific user (joined by Uid and filter by program type)
@app.route('/userfavmovies', methods=['GET'])
def get_user_fav_movies(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' in request.args:
        Email = request.args['Email']
    else:
        return "Error: No user email prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT f.Name FROM favourites f, program p WHERE f.Email=%s AND f.Uid=p.Uid AND p.Type='Movie'", [Email])
    results = cur.fetchall()
    return jsonify(results)

#Getting the all the shows that are favourited by a specific user (joined by Uid and filter by program type)
@app.route('/userfavshows', methods=['GET'])
def get_user_fav_shows(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' in request.args:
        Email = request.args['Email']
    else:
        return "Error: No user email prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT f.Name FROM favourites f, program p WHERE f.Email=%s AND f.Uid=p.Uid AND p.Type='TV Show'", [Email])
    results = cur.fetchall()
    return jsonify(results)
'''
# Getting the all the shows that are favourited by a specific user (joined by Uid and filter by program type)


@app.route('/userfavs', methods=['GET'])
def get_user_fav():
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' in request.args:
        Email = request.args['Email']
    else:
        return "Error: No user email prvoided."
    cur = mysql.connection.cursor()
    # User favourite crews
    cur.execute(
        "SELECT f.Name AS Name, f.Cid AS Cid, c.Image AS Image FROM favourites f, crew c WHERE f.Email=%s AND f.Cid=c.Cid", [Email])
    result1 = cur.fetchall()
    cur.execute(
        "SELECT f.Name AS Name, f.Uid AS Uid, p.Image AS Image FROM favourites f, program p WHERE f.Email=%s AND f.Uid=p.Uid AND p.Type='Movie'", [Email])
    result2 = cur.fetchall()
    cur.execute(
        "SELECT f.Name AS Name, f.Uid AS Uid, p.Image AS Image FROM favourites f, program p WHERE f.Email=%s AND f.Uid=p.Uid AND p.Type='TV Show'", [Email])
    result3 = cur.fetchall()
    return {'favouritecrew': result1, 'favouritemovies': result2, 'favouriteshows': result3}


# Adding a favourite to the database
@app.route('/userfavs', methods=['DELETE'])
def remove_user_fav():
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' and 'Uid' in request.args:
        Email = request.args['Email']
        Uid = request.args['Uid']
        cur = mysql.connection.cursor()
        cur.execute(
            'DELETE FROM favourites WHERE Email=%s AND Uid=%s', [Email, Uid])
        mysql.connection.commit()
        cur.close()
        return 'Done'
    if 'Email' and 'Cid' in request.args:
        Email = request.args['Email']
        Cid = request.args['Cid']
        cur = mysql.connection.cursor()
        cur.execute(
            'DELETE FROM favourites WHERE Email=%s AND Cid=%s', [Email, Cid])
        mysql.connection.commit()
        cur.close()
        return 'Done'
    else:
        return "Error: No email or id prvoided."

# Adding a favourite to the database


@app.route('/userfavs', methods=['POST'])
def add_user_fav():
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    requestObj = request.get_json()
    Email = requestObj['Email']
    Uid = requestObj['Uid']
    Cid = requestObj['Cid']
    if 'Email' and 'Uid':
        return 'Done'
    if 'Email' and 'Cid':
        return 'Not Done'
    else:
        return "Error: No email or id prvoided."


# Inserting new user review
@app.route('/userreview', methods=['POST'])
def add_user_review():
    requestObj = request.get_json()
    Uid = requestObj['Uid']
    Author = requestObj['Author']
    Rating = requestObj['Rating']
    Description = requestObj['Description']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO reviews (Uid, Author, Rating, Description) VALUES (%s, %s, %s, %s)", [
                Uid, Author, Rating, Description])
    mysql.connection.commit()
    cur.close()
    return "Done!"


if __name__ == "__main__":
    app.run(debug=True)
