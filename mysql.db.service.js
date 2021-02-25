const mysql = require('mysql');



var mySqlConnection=mysql.createConnection({


  host: 'tv-assignment.ckgzdpgniw5e.ap-southeast-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password1995dk',
database: "assignment",
multipleStatements:true

});
mySqlConnection.connect((err)=>{
  if(!err){
    console.log("connected")
  }
  else{
        console.log(err)
  }
});
module.exports=mySqlConnection;
