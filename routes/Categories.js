const express = require('express')
const router = express.Router()
const mySqlConnection=require("../mysql.db.service.js");
//const state = db.state;



//get list of all categories
router.get('/', (req,res) => {
    mySqlConnection.query("SELECT * from categories ",(err,rows,field)=>{
      if(!err){
        res.send(rows)
      }
      else{
        console.log(err);
      }
    })
});

// get doctors from particular category
router.get('/getDoctors/:id', (req,res) => {
  const categoryId=req.params.id;
    mySqlConnection.query("SELECT * from doctors JOIN categories ON doctors.job_role=categories.category_id where job_role=?",[categoryId],(err,rows,field)=>{
      if(!err){
        res.send(rows)
      }
      else{
        console.log(err);
      }
    })
});


module.exports=router
