var orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM

var burger = {
    selectAll: function(tableInput, cb) {
        orm.selectAll(tableInput, function(result){
            cb(result);
        });
    },
    insertOne: function(tableInput, burgerName, devoured, cb) {
        orm.insertOne(tableInput, burgerName, devoured, function(result){
            cb(result);
        });
    },
    updateOne: function(tableInput, objColVals, condition, cb) {
        orm.updateOne(tableInput, objColVals, condition, function(result){
            cb(result);
        });
    },   
    deleteOne: function(tableInput, burgerName, devoured, cb) {
        orm.deleteOne(tableInput, burgerName, devoured, function(result){
            cb(result);
        });
    } 
}
 
module.exports = burger;