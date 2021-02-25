const express = require('express');

const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const mySqlConnection=require("./mysql.db.service.js");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const UserRoute=require("./routes/User");
const DoctorRoute=require("./routes/Doctor");
const ConsultationRoute=require("./routes/Consultation");
const CategoriesRoute=require("./routes/Categories");

app.use("/user",UserRoute);
app.use("/doctor",DoctorRoute);
app.use("/categories",CategoriesRoute);
app.use("/consultation",ConsultationRoute);


app.listen(3000);
