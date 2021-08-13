const express = require('express');
const app = express();
const mongoose = require('mongoose');

const env = require('dotenv');
env.config();


//IMport 
const jwt = require('jsonwebtoken');

//Middleware
app.use(express.json());

//connect
//mongodb+srv://admin123:admin123@amazon-cluster.qnz6h.mongodb.net/AMAZON-BACKEND?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://admin123:admin123@amazon-cluster.qnz6h.mongodb.net/AMAZON-BACKEND?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//import db from mongoose.connection

const db = mongoose.connection;

//object.method();
/**
 *  class Jwt{
 *      //1. Property
 * 
 *      //2. COnstructor
 * 
 *      //3. Method
 *      function sign(obj,secret){
 * 
 *          return '';
 *      }
 *      
 *  }
 * 
 * let obj = new ClassName();
 * let jwt = new Jwt();
 * 
 * const token = jwt.sign({p:v,p:v,p:v},secreate)
 * 
 */
var secretKey = 'OKLABSTRAINGISTHEBEST';
var token = jwt.sign({_id:"6111ee58d644c03dfc6973e0",name:'Anil'},secretKey,{expiresIn:20});

console.log(token);

try{
    setTimeout(()=>{
        var decoded = jwt.verify(token,secretKey);
        console.log(decoded);
    },10000);
}catch(err){
    console.log('Expired '+err);
}

//something.on('event',cbfn) is used for listining an event

db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',()=>{
    console.log('Connected');
});







//const studentRoute = require('./routes/studentRoute');

//app.use('/api',studentRoute);


app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT}  `);
});