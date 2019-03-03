var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: "3306",
  database: "schema1"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    // insert into <table_name> (<column_name>) values(<value>)
    sql="insert into test (name) values('kuku')";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Insert Completed");
    });

    // select * from <table_name>
    sql = "select * from test";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});