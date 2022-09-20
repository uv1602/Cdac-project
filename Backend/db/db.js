const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "dac22",
  waitForConnections: "true",
  connectionLimit: 10,
  queueLimit: 0,
  port: 3306,
});

module.exports = pool;
