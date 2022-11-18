const mysql = require('mysql')

let conection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'assipark'
});

conection.connect((err) =>{
    if(err) throw err
    console.log('CONEXION EXITOSA UwU')
})


conection.end()