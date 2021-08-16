    const express = require('express');
    const app = express();

    const env = require('dotenv');
    env.config();

    const mongoose = require('mongoose');

    //Deconstruct /Import
    const { Schema } = mongoose;
    //connect
    //mongodb+srv://admin123:admin123@amazon-cluster.qnz6h.mongodb.net/AMAZON-BACKEND?retryWrites=true&w=majority
    //mongodb+srv://admin123:<password>@amazon-cluster.qnz6h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    mongoose.connect('mongodb+srv://admin123:admin123@amazon-cluster.qnz6h.mongodb.net/AMAZON-BACKEND?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected');
    });

    const kettySchema = new Schema({
        name:{
            type:String
        }
    });


    kettySchema.method('myFunction',()=>{
        console.log('Meeoueee');
    });

    kettySchema.method('myFunction2',function(){
        
        
        
        return 'Hello ';
    });

    //Create the collection

   const Kitty = mongoose.model('Kitty',kettySchema);

   //Lets Create an object

   //Const objname = new ClassName();
   let kitty = new Kitty();

   //You can access the method by using Intance object

   //obj.method();
   //obj.member

   kitty.myFunction();
    let x = kitty.myFunction2();

    console.log(x);

    //import someting from somelibary  mjs
    // const { a,b,c,d,e } = require();     
    //const { nameimport1,namedimport2,..... } = require('somelibary');      cjs
    /*

    const { body, validationResult } = require('express-validator');

    app.use(express.json());

    //app.method('route','mwfn1','mwfn2','cbfn');
    app.post('/user',
    // username must be an email
   // body('username').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    (req,res)=>{

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //Data is invalid
            return res.status(400).json({ errors: errors.array() });
        }
        //Data is valid
        res.status(200).send({
            msg:'ok',
            d1:req.body
        })

       
    });
    */



    app.listen(process.env.PORT,()=>{
        console.log(`The server is running on port ${process.env.PORT}  `);
    });