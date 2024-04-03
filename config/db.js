const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123",
  database: "Mahasiswa",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.error("Fail: " + err.stack);
    return;
  }
  console.log("Connected to database with id: " + connection.threadId);
});

module.exports = connection;
