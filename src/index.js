const express = require('express');
const app = express();
const env = require('dotenv');
env.config();

const mongoose = require('mongoose');


app.use(express.json());


const bcrypt = require('bcrypt');

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@amazon-cluster.qnz6h.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

//const { Schema } = require('mongoose');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected');
});


const userSchema = new mongoose.Schema({
    email: {
            type:String,
            required:true
        },
    hash_pass:{
            type:String,
            required:true
        }
});


const UserModel = mongoose.model('Users',userSchema);



//1. Technique

/*
const hashed_pass = bcrypt.hash('123',10);

console.log(hashed_pass);

hashed_pass.then(function(hashed_pass){
    console.log(hashed_pass);
}).catch(function(e){

}).finally();
*/
/*
bcrypt.hash('123',10).then(function(d){
    console.log(d);
}).catch(function(e){}).finally(function(){});

bcrypt.hash('123',1).then(function(d){
    console.log(d);
}).catch(function(e){}).finally(function(){});
*/



app.post('/generatepassword',(req,res)=>{

    const hash = bcrypt.hashSync(req.body.password,10);
    //console.log(hash);

    //console.log(req.body.password);
    //Create a Document
    const userObj = new UserModel({
        email:req.body.email,
        hash_pass:hash
    });

    userObj.save().then((d)=>{
        //Success
        console.log('saved');
        res.status(200).json({
            d:"ok",
            'hashed_password':hash
        });
    }).catch((e)=>{
        res.status(400).json(e);
    }).finally();
});

app.post('/checkpassword',(req,res)=>{

    let pp = req.body.password;

    // /bcrypt.compareSync(myPlaintextPassword, hash);
    if(bcrypt.compareSync(req.body.password, '$2b$10$SRcLLiYqsWlASsyK01QmDuQ76KsUMd.fohOqP2ms7qxzRiAsh40z2')){
        res.status(200).send({
            msg:"Password Match"
        });
    }else{
        res.status(403).send({
            msg:"Password does not Match"
        });
    }


});


/*
 




// define a schema


//schema.virtual('virtualfieldname').get(function(){}).set(function(){});
//schema.virtual('virtualfieldname').set(function(){});
//schema.method();
personSchema.virtual('fullname').get(function(){
    return this.name +' '+ this.lastname;
});

//Let Create a Model // // compile our model
const PersonModel = mongoose.model('Person',personSchema);

//Create a Document
const personObj = new PersonModel({
    name:"A",
    lastname:"B"
});

personObj.save().then(()=>{
    console.log('saved');
}).catch().finally();

console.log(personObj.name +" "+ personObj.lastname);

let x = personObj.fullname;

console.log(x);
*/

app.listen(process.env.PORT,()=>{
    console.log(`The server is running on port ${process.env.PORT}  `);
});