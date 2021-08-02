    //1. Import Area
    var express = require('express')
    //const obj = library()
    const app = express()
    const env = require('dotenv')

    env.config();

    const mongoose = require('mongoose');

    //Deconstruct /Import
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


    const UserModel = mongoose.model('User', UserSchema);

    const userObject =  new UserModel({ firstName:'SNIL',lastName:"Sharma",addr:'Neemuch',username:"oklabs2" })

    //1. modelObject.save()
    userObject.save(function(err){
        //if (err) return handleError(err);
        console.log('Data inserted successfully');
    });

    //2. Model.create()
    UserModel.create( { firstName:'Dilip',lastName:"Mali",addr:'Neemuch',username:"oklabs3"  },function(err,userObject){
        console.log('Data inserted successfully by create method');
    });

    //3. model.insertMany() 
    //Model.insertMany(ArrayOfObject,cbfn)

    UserModel.insertMany([{
        firstName:'Antim',lastName:"Rathore",addr:'Neemuch',username:"oklabs4"
    },{
        firstName:'Pushpita',lastName:"Rathore",addr:'Neemuch',username:"oklabs5"
    }],function(error){
        console.log('Insert many success');
    });


    app.listen(process.env.PORT, () => {  //Fat Arrow Function to create cbfn
        console.log(`The server is running on Port ${process.env.PORT} `);
    })

        //We are going to create a route
