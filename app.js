const mysql =  require('mysql');

let conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'assipark'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION_EXITOSA_7u7');
    }

})
conexion.end();