var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

if (process.env.JAWSDB_URL) {
    // connection = mysql.createConnection(process.env.JAWSDB_URL);
    connection = mysql.createConnection({
        port: 3306,
        host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'foywabjkwudkjdlb',
        password: 'svmstfvicef4obe3',
        database: 'buhsre8sxi7nltel'
    });
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
    }

    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });

    module.exports = connection;