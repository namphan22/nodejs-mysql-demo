const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employee_table",
  password: ""// insert passworld
 
});
module.exports = mysqlConnection;

// mysqlConnection.connect((err) => {
//   if (err) 
//     console.log("Connected");
 
// });
// mysqlConnection.query('SELECT * FROM employee_info',function(err,results,fields){
//     if(err) throw err;
//     results.forEach(element => {
//         console.log(element);
        
//     });
// });