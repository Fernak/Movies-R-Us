from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
import json

app = Flask(__name__)

#Database configuration 
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Bubbledophins1201!'
app.config['MYSQL_DB'] = 'cpsc471_project_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

'''
* References: 
    * https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api
    * https://flask-mysqldb.readthedocs.io/en/latest/
'''
#Getting list of movies in database (forgot if we wanted to only show movies that are offered by services the user is subscribed to)
@app.route('/movies', methods=['GET'])
def get_movies():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM program WHERE type='Movie'")
    results = cur.fetchall()
    return jsonify(results)

#Getting list of tvshow in database 
@app.route('/tvshows', methods=['GET'])
def get_tvshows():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM program WHERE type='TV Show'")
    results = cur.fetchall()
    return jsonify(results)

#Getting details of a specific program (join and filter by program Uid)
@app.route('/programdetails', methods=['GET'])
def get_program_details(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Uid' in request.args:
        Uid = request.args['Uid']
    else:
        return "Error: No uuid prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM program p, program_details pd WHERE p.Uid=%s AND p.Uid=pd.Uid", [Uid])
    results = cur.fetchall()
    return jsonify(results)

#Getting the crew members of a specific program (join and filter by program Uid)
@app.route('/programcrew', methods=['GET'])
def get_program_crew(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Uid' in request.args:
        Uid = request.args['Uid']
    else:
        return "Error: No uuid prvoided."
    cur = mysql.connection.cursor()
    cur.execute("SELECT Name FROM work_on w, crew c WHERE w.Uid=%s AND w.Cid=c.Cid", [Uid])
    results = cur.fetchall()
    return jsonify(results)

#Getting the the list of crew members that are favourited by a specific user filter by Uid=null)
@app.route('/userfavcrew', methods=['GET'])
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

if __name__ == "__main__":
    app.run(debug=True)