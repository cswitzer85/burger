// Inside the `connection.js` file, setup the code to connect Node to MySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  port: 3306,
  user: "bd7f84e8cb368c",
  password: "67a9364e",
  database: "heroku_62f8433e7ec3991"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;