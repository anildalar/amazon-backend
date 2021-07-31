//1. Import Area
var express = require('express')
//const obj = library()
const app = express()
const env = require('dotenv')

env.config();

const mongoose = require('mongoose');
const { Schema } = mongoose;


//mongodb+srv://admin123:<password>@amazon-cluster.grgdi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    'mongodb+srv://admin123:admin123@amazon-cluster.grgdi.mongodb.net/AMAZON-BACKEND?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected');
    

});


//Lets Create a Schema
// const object = new Class();
const UserSchema = new Schema({
    //P:V,
    //P:V
    firstName:String, // String is shorthand for {type: String}
    'lastName': { type: String },
    addr:{
        type: String,
        required:true
    },
    "username": { type: String,unique:true, required:true }

});


const ProductSchema = new Schema({
    productName:{ type:String}
});

const UserCollection = mongoose.model('User', UserSchema);
const ProductCollection = mongoose.model("Products",ProductSchema);



app.listen(process.env.PORT, () => {  //Fat Arrow Function to create cbfn
    console.log(`The server is running on Port ${process.env.PORT} `);
})

    //We are going to create a route
