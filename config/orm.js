//  Import (require) `connection.js` into `orm.js`
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
	var arr = [];
  
	for (var i = 0; i < num; i++) {
	  arr.push("?");
	}
  
	return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
	var arr = [];
  
	// loop through the keys and push the key/value as a string int arr
	for (var key in ob) {
	  var value = ob[key];
	  // check to skip hidden properties
	  if (Object.hasOwnProperty.call(ob, key)) {
		// if string with spaces, add quotations
		if (typeof value === "string" && value.indexOf(" ") >= 0) {
		  value = "'" + value + "'";
		}
		arr.push(key + "=" + value);
	  }
	}
  
	// translate array of strings to a single comma-separated string
	return arr.toString();
  }
//  In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
	// `selectAll()`
	all: function (tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// `insertOne()`
	create: function (table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
	// `updateOne()` 
	update: function (table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += "devoured = 1";
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
	},
delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};



// Export orm object
module.exports = orm;
