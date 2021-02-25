const express = require('express')
const router = express.Router()
const mySqlConnection=require("../mysql.db.service.js");
//const state = db.state;

//get details of user by id
router.get('/:id', (req,res) => {
    const userId = req.params.id
    mySqlConnection.query("SELECT * from user where user_id=?",[userId],(err,rows,field)=>{
      if(!err){
        res.send(rows)
      }
      else{
        console.log(err);
      }
    })
});



module.exports=router
