const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Lucifer@16",
  database: "dac22",
  waitForConnections: "true",
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
});

module.exports = pool;