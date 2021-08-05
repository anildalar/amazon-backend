const express = require('express');
const app = express();
const mongoose = require('mongoose');




const env = require('dotenv');
env.config();

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

//something.on('event',cbfn) is used for listining an event

db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',()=>{
    console.log('Connected');
});







const studentRoute = require('./routes/studentRoute');

app.use('/api',studentRoute);


app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT}  `);
});