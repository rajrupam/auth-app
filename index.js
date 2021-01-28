const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv')
const authRoute=require('./routes/auth');
var bodyParser = require('body-parser');




dotenv.config({ path: './config.env' }); 




mongoose.connect('process.env.DB_CONNECT',
{ useUnifiedTopology: true },
()=>console.log('connected'));



app.use(express.json());









app.use('/api/user',authRoute);




app.listen(3000,()=>{
    console.log('Listening on port 3000');
})