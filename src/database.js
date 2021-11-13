const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'sql10.freemysqlhosting.net',
    user: 'sql10450762',
    password:'8KwEnBIml2',
    database:'sql10450762',
    //port:'3306',
    //multipleStatements: true

});


mysqlConnection.connect(function(err){
    if(err){
      console.log(err);
      return;    }else{
      console.log("La base de datos esta conectada, Bienvenido");
    }


  });

  module.exports = mysqlConnection;