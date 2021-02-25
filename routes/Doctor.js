const express = require('express')
const router = express.Router()
const mySqlConnection=require("../mysql.db.service.js");
//const state = db.state;

//get details of doctor by id
router.get('/:id', (req,res) => {
    const doctorId = req.params.id
    mySqlConnection.query("SELECT * from doctors JOIN categories ON doctors.job_role=categories.category_id where doctor_id=?",[doctorId],(err,rows,field)=>{
      if(!err){
        res.send(rows)
      }
      else{
        console.log(err);
      }
    })
});

// get doctors from particular category
router.get('/category/:id', (req,res) => {
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
