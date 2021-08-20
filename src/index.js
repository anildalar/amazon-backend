const express = require('express');
const app = express();
const env = require('dotenv');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

env.config();
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@amazon-cluster.qnz6h.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected');
});

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    hash_pass:String
});


//Lets Create a Virtual Field
userSchema.virtual('password').set(function(password){
    this.hash_pass = bcrypt.hashSync(password,10)
});

const UserModel = mongoose.model('users',userSchema);


//Lets Create an Object of UserModel


app.post('/api/register',(req,res)=>{
    
    //extract the incomming parameter from req.body object
    const { firstName,lastName,email,password } = req.body;

    let userobject = new UserModel({
       firstName:firstName,lastName:lastName,email:email,password:password
    });

    userobject.save((e,d)=>{
        if (e) return res.status(400).json(e);
        return res.status(200).json({
            msg:"ok"
        });
    })
});

app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT}  `);
});