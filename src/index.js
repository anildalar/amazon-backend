//1. Import Area
var express = require('express')
//const obj = library()
const app = express()

//1. require('dotenv').config()
require('dotenv').config();

//2. const env = require('dotenv')
//2.1 env.config();

//process.env.CONSTANTNAME

//process.env.PORT




//Middleware
app.use(express.json())



//obj.method()
//cbfn = callback function
//app.get('routename','cbfn');
app.get('/',function(req,res){
    res.send('Hello World Welcome to oklabs')
});

app.get('/getmyname',(req,res)=>{
    res.send('Hello OKLABS How are you ?');
});

app.get('/getmymission',function(req,res){
    res.send('Our Mission Mission to educate student for coding');
});

app.post('/getuserinfo',(req,res)=>{
    let firstname = req.params.fname;
    console.log(firstname);
   //HTTP Status Code
   //res.status(200).json({ "username":  req.body.uname });
   res.status(200).json({"firstname":firstname});

});



app.listen(process.env.PORT,()=>{  //Fat Arrow Function to create cbfn
    console.log(`The server is running on Port ${ process.env.PORT } `);
})

//We are going to create a route
