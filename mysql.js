const mysql = require('mysql')

let conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assipark'
});

conection.connect((err) =>{
    if(err) throw err
    console.log('CONEXION EXITOSA 7U7')
})

conection.end()