var mysql = require('mysql');


var connection;

if (process.env.JAWSDB_URL) {
    // connection = mysql.createConnection(process.env.JAWSDB_URL);
    connection = mysql.createConnection({
        port: 3306,
        host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'bvos70b8raxzvzvc',
        password: 'tgfj6ivlbnv4k172',
        database: 'ghep383e0msp498s'
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