const mysql = require('mysql');

// MySQL Connection
const connection = mysql.createConnection({
    host: 'metro.proxy.rlwy.net',
    port: 24433,
    user: 'root',
    password: 'pjYFXPCogwDoBFbMEoWLwVtnzzXBPcGa',
    database: 'railway',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});



module.exports = connection;