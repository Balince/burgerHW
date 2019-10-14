var connection = require("./connection.js");

function objToSql(ob){
  //column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + '=' + ob[key]);
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, burgerName, devoured, cb) {
        var queryString = 'INSERT INTO ' + tableInput + ' (burger_name, devoured) ';
        queryString += 'VALUES ("' + burgerName + '", ' + devoured + ');';

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;
 
      queryString += ' SET ';
      queryString += objToSql(objColVals);
      queryString += ' WHERE ';
      queryString += condition;

      console.log(queryString)

      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }    
};

module.exports = orm;