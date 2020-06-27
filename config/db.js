const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeedatabase",
});

connection.connect((err) => {
  if (!err) {
    console.log("DB connection successfully...");
  } else {
    console.log(err);
  }
});

module.exports = connection;
