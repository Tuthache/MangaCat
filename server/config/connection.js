const mysql = require("mysql");

const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "manga_cat",
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err);
    return;
  }
  console.log("Connected to MySQL database successfully");
});

module.exports = connection;
