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
#Get list of programs that are offered by the streaming services that the user is subscribed to 
@app.route('/programs', methods=['GET'])
def get_programs():
    if 'Type' and 'Email' in request.args:
        Type = request.args['Type']
        Email = request.args['Email']
    else:
        return "Error: No Type or user email prvoided."
    cur = mysql.connection.cursor()
    cur.execute('''CALL getPrograms(%s, %s)''', [Type, Email])
    results = cur.fetchall()
    return jsonify(results)

#Get details of a specific program 
@app.route('/programdetails', methods=['GET'])
def get_program_details(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Uid' in request.args:
        Uid = request.args['Uid']
    else:
        return "Error: No Uid prvoided."
    cur = mysql.connection.cursor()
    cur.execute('''CALL getProgramDetails(%s, 'info')''', [Uid])
    result1 = cur.fetchone()
    cur.execute('''CALL getProgramDetails(%s, 'crew')''', [Uid])
    result2 = cur.fetchall()
    cur.execute('''CALL getProgramDetails(%s, 'reviews')''', [Uid])
    result3 = cur.fetchall()
    return {'programinfo' : result1, 'programcrew' : result2, 'programreviews' : result3}

#Get details of a specific crew member
@app.route('/crewdetails', methods=['GET'])
def get_crew_details(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Cid' in request.args:
        Cid = request.args['Cid']
    else:
        return "Error: No Cid prvoided."
    cur = mysql.connection.cursor()
    cur.execute('''CALL getCrewDetails(%s, 'info')''', [Cid])
    result1 = cur.fetchone()
    cur.execute('''CALL getCrewDetails(%s, 'programs')''', [Cid])
    result2 = cur.fetchall()
    cur.execute('''CALL getCrewDetails(%s, 'roles')''', [Cid])
    result3 = cur.fetchall()
    return {'crewinfo': result1, 'crewprograms' : result2, 'crewroles': result3}

#Get the all the shows that are favourited by a specific user
@app.route('/userfavs', methods=['GET'])
def get_user_fav(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' in request.args:
        Email = request.args['Email']
    else:
        return "Error: No user email prvoided."
    cur = mysql.connection.cursor()
    #User favourite crews 
    cur.execute('''CALL getUserFavourites(%s, 'crew')''', [Email])
    result1 = cur.fetchall()
    cur.execute('''CALL getUserFavourites(%s, 'movies')''', [Email])
    result2 = cur.fetchall()
    cur.execute('''CALL getUserFavourites(%s, 'tvshows')''', [Email])
    result3 = cur.fetchall()
    return {'favouritecrew' : result1, 'favouritemovies' : result2, 'favouriteshows' : result3}

# Remove a user favourite (can be program or crew)
@app.route('/userfavs', methods=['DELETE'])
def remove_user_fav(): 
    method = 'DELETE'
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' and 'Uid' in request.args:
        Email = request.args['Email']
        Uid = request.args['Uid']
        cur = mysql.connection.cursor()
        cur.execute('''CALL manageFavourites(%s, %s, '', %s)''', [Email, Uid, method])
        mysql.connection.commit()
        cur.close()
        return 'Done'
    if 'Email' and 'Cid' in request.args:
        Email = request.args['Email']
        Cid = request.args['Cid']
        cur = mysql.connection.cursor()
        cur.execute('''CALL manageFavourites(%s, '', %s, %s)''', [Email, Cid, method])
        mysql.connection.commit()
        cur.close()
        return 'Done'
    else:
        return "Error: No email or id prvoided."

# Add a user favourite (can be a program or crew)
@app.route('/userfavs', methods=['POST'])
def add_user_fav(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    requestObj = request.get_json()
    Email = requestObj['Email'] 
    Uid = requestObj['Uid']
    Cid = requestObj['Cid']
    method = 'POST'
    cur = mysql.connection.cursor()
    cur.execute('''CALL manageFavourites(%s, %s, %s, %s)''', [Email, Uid, Cid, method])
    mysql.connection.commit()
    cur.close()
    return "Done"

# Inserting new user review for a program
@app.route('/userreview', methods=['POST'])
def add_user_review(): 
    requestObj = request.get_json()
    Uid = requestObj['Uid']
    Email = requestObj['Email']
    Rating = requestObj['Rating'] 
    Description = requestObj['Description']
    cur = mysql.connection.cursor()
    cur.execute('''CALL addReview(%s, %s, %s, %s)''', [Uid, Email, Rating, Description])
    results = cur.fetchone()
    cur.close()
    mysql.connection.commit() 
    print(results) 
    return jsonify(results)

#Get all services the user is subscribed to 
@app.route('/usersubscriptions', methods=['GET'])
def get_user_subs(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    if 'Email' in request.args:
        Email = request.args['Email']
    else:
        return "Error: No Email prvoided."
    method = 'GET'
    cur = mysql.connection.cursor()
    cur.execute('''CALL manageUserService(%s, '', %s)''', [Email, method])
    result = cur.fetchall()
    return jsonify(result)

# Insert new subscribed service for the user 
@app.route('/usersubscriptions', methods=['POST'])
def add_user_sub(): 
    requestObj = request.get_json()
    Email = requestObj['Email']
    Service_name = requestObj['Service_name']
    method = 'POST'
    cur = mysql.connection.cursor()
    cur.execute('''CALL manageUserService(%s, %s, %s)''', [Email, Service_name, method])
    mysql.connection.commit()
    cur.close()
    return "Done!"

# Remove a user subscription service 
@app.route('/usersubscriptions', methods=['DELETE'])
def delete_user_sub(): 
    requestObj = request.get_json()
    Email = requestObj['Email']
    Service_name = requestObj['Service_name']
    method = 'DELETE'
    cur = mysql.connection.cursor()
    cur.execute('''CALL manageUserService(%s, %s, %s)''', [Email, Service_name, method])
    mysql.connection.commit()
    cur.close()
    return "Done!"

#Get list of all available streaming services 
@app.route('/services', methods=['GET'])
def get_all_services(): 
    # Referenced https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask#understanding-our-database-powered-api to get parameter
    cur = mysql.connection.cursor()
    cur.execute('''CALL getServices()''')
    result = cur.fetchall()
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)