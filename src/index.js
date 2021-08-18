    const express = require('express');
    const app = express();
    const env = require('dotenv');
    env.config();

    const mongoose = require('mongoose');

    app.use(express.json());

    //Deconstruct /Import
   // const { Schema } = mongoose;

    //console.log(process.env.MONGO_USER);
   // console.log(process.env.MONGO_PASS);
   // console.log(process.env.MONGO_DB);
    //console.log(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@amazon-cluster.qnz6h.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`);

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
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        mobileno:{
            type:String
        }
    });

    const UserModel = mongoose.model('User',userSchema);

    app.post('/api/register',(req,res)=>{

        //Destructure 
        const { fn,ln,eml,pwd,mobno } = req.body;

        //console.log(firstName);
        //console.log(req.body);

        //In Registeration Process first you need to find if the user is already exits

        UserModel.findOne({email:eml}).then((d)=>{
            if(d){
                res.status(400).json({
                    msg:"Failed - User Already Exists"
                });
            }else{
                //User not exits
                UserModel.create({ firstName:fn,lastName:ln,email:eml,password:pwd,mobileno:mobno }).then((d)=>{
                    //Success
                    res.status(200).json({
                        msg:"OK - Registeration is successfull"
                    });
                }).catch((e)=>{
                    res.status(400).json(e);
                });
            }
        }).catch(function(e){
            res.status(400).json(e);
        }).finally();
        /*
        exec((e,d)=>{
            
        });
        */
    });

   

    //const kitty = new Cat({ name: 'Zildjian' });
   // kitty.save().then(() => console.log('meow'));





    app.listen(process.env.PORT,()=>{
        console.log(`The server is running on port ${process.env.PORT}  `);
    });