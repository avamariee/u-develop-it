const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Bonjovilol1!2!3!',
  database: 'election'
});

module.exports = db;