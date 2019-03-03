var MySQLEvents = require('mysql-events');
var dsn = {
    host: "localhost",
    user: "root",
    password: "password",
    port: "3306",
};
var mysqlEventWatcher = MySQLEvents(dsn);
var watcher = mysqlEventWatcher.add(
  'schema1.test',
  function (oldRow, newRow, event) {
     //row inserted
    if (oldRow === null) {
      //insert code goes here
      console.log("ROW INSERT: ", newRow.fields);
    }
 
     //row deleted
    if (newRow === null) {
      //delete code goes here
      console.log("ROW DELETED");
    }
 
     //row updated
    if (oldRow !== null && newRow !== null) {
      //update code goes here
      console.log("ROW UPDATE ---->", newRow);
    }
 
    //detailed event information
    // console.log(event)
  }, 
  'match this string or regex'
);