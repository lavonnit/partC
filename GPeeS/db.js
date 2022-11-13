const mysql = require("mysql2");
const dbconfig = require("./dbconfig.js");
// Create a connection to the database
const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
});
// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
module.exports = connection;