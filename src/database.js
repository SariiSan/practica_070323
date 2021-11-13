const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'us-cdbr-east-04.cleardb.com',
    user: 'bcc633eac38a26',
    password:'37ac9c6d',
    database:'heroku_8cfa907bd831ff0',
    port:'3306',
    multipleStatements: true

});


mysqlConnection.connect(function(err){
    if(err){
      console.log(err);
      return;    }else{
      console.log("La base de datos esta conectada");
    }


  });

  module.exports = mysqlConnection;