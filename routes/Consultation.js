const express = require('express')
const router = express.Router()
const mySqlConnection=require("../mysql.db.service.js");
//const state = db.state;



//get list of all past consultation of user
router.get('/pastConsultation/:id', (req,res) => {
  const userId=req.params.id
    mySqlConnection.query("SELECT * from consultations JOIN doctors JOIN categories ON consultations.doctorId=doctors.doctor_id && doctors.job_role=categories.category_id where userId=? && completed=? ",[userId,1],(err,rows,field)=>{
      if(!err){
        res.send(rows)
      }
      else{
        console.log(err);
      }
    })
});

//get upcoming consultation of User
router.get('/upcoming/:id', (req,res) => {
  const userId=req.params.id
    mySqlConnection.query("SELECT * from consultations  where userId=? && completed=? ",[userId,0],(err,rows,field)=>{
      if(!err){
        res.send(rows)
      }
      else{
        console.log(err);
      }
    })
});





module.exports=router
