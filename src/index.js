    //1. Import Area
    var express = require('express')
    //const obj = library()
    const app = express()

    var bodyParser = require('body-parser')

    // create application/json parser
    app.use(bodyParser());

    //1 . 

    //Middleware 
    //app.use(express.json());

    app.post('/saveuser',(req,res,next)=>{
        req.body.name = req.body.name + ' Welcome to the world of eduction ';

        
        next();
    },function(req,res,next){
        req.body.name = req.body.name + "Lets start the tutorial";
        next();
    },(req,res)=>{
        console.log(req.body.fname);
        //req.body.prametername
        res.status(200).json({
            'msg':req.body.name
        });
    });

    app.listen(5000,()=>{  //Fat Arrow Function to create cbfn
        console.log(`The server is running on Port 5000 `);
    })

    //We are going to create a route
