from flask import Flask
from flask import render_template, redirect, request, Response, session
from flask_mysqldb import MySQL, MySQLdb


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'login'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/registro')
def registro():
    return render_template('registro.html')

#funcion de login
@app.route('/acceso-login', methods=['GET', 'POST'])
def login():

    if request.method == 'POST' and 'txtCorreo' in request.form and 'txtPassword':
        _correo = request.form['txtCorreo']
        _password = request.form['txtPassword']

        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM usuarios WHERE correo = %s AND password = %s', (_correo, _password))
        account = cur.fetchone()

        if account:
            session['logueado'] = True
            session['id'] = account['id']
            session['id_rol'] = account['id_rol']

            if session['id_rol'] == 1:
                return render_template('admin.html')
            elif session ['id_rol'] == 2:
                return render_template('usuario.html')
        
        else:

            return render_template('index.html', mensaje= 'Usuario o contraseña incorrecta')






if __name__ == '__main__':
        app.secret_key = 'apk'
        app.run(debug=True, host='0.0.0.0', port=5000, threaded=True, use_reloader=False)