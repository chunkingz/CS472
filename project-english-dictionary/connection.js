const mysql = require('mysql');

exports.db = mysql.createConnection({
    host: "localhost",
    user: "chunkingz",
    password: "toor",
    database: "entries"
});
