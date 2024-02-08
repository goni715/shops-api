const express = require("express");
const app = new express();

const authRouter = require('./src/routes/authRoute');
const userRouter = require('./src/routes/userRoute');
const categoryRouter = require('./src/routes/categoryRoute');
const productRouter = require('./src/routes/productRoute');



//Security Middleware Import
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const morgan = require("morgan");
const cors = require('cors');

//Database Library Import
const mongoose = require('mongoose');
const dbConnect = require("./src/utility/dbConnect");


//Security Middleware Implementation
app.use(morgan("dev"));
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cors())

//RequestBodySizeIncrease//Body Parser Implementation
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));


//Request Rate Limit Implementation

const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,   //15 Minutes
    max: 300000   //Limit each IP to 100 requests per windowMs
})
app.use(Limiter);



//MongoDB(mongoose) Atlas Database Connection
dbConnect();

//Managing Back-end Routing// Back-end Routing Implementation
//app.use('/api/v1', router);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);


//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({message:"Fail", data:"Route Not Found"});
});




app.listen(5000,function(){
    console.log("Server run @5000");
});