var mysql =  require('mysql');

var conexion = mysql.createConnection({
    host: 'localhots',
    database: 'usuarios_db',
    user:'root',
    password: ' '
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('CONEXION_EXITOSA_7u7');
    }

})
conexion.end();