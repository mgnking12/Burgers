/*
Here is where you make the connection to the database and export and used by the O.R.M.
*/
var mysql = require('mysql');


var connection = mysql.createConnection({
    port: 3306,
    host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'hh6ktphrm7zqrc1t',
    password: 'wm0h14p49pj2kfwt',
    database: 'mt73gsjv5w8sw8oq'
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;