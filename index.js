var express = require('express');
// const mysql = require('mysql');
const app = express();
const connection = require('./database');
app.get('/',function(req,res){
    let sql = 'SELECT * FROM employee_info';
    connection.query(sql,function(err,results){
        if(err)throw err;
        
        res.send(results);
    });
    
});
app.listen(3000,()=>{
    console.log('App is running on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('database connected');
    })
});