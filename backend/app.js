const express = require('express')
const app = express()
const PORT = 3000
const {Connection,Request} = require('tedious')





var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'timemachine.ckkvabekzfug.ap-south-1.rds.amazonaws.com',
    user     : 'timeMachine',
    password : 'timeMachine',
    port     : 3306
  });
  
  connection.connect(function(err) {
    if (err) { 
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });
  
  connection.end();



app.get('/',(req,res)=>{

    res.status(200).send("Hello from Automatic Time Generator")


})


app.listen(PORT,()=>{

    console.log("Running on",PORT)

})