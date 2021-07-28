//1. Import Area
var express = require('express')
//const obj = library()
const app = express()

const { P,FN,LN,ADDR,mf,myMethod2,myMethod3,myMethod4 } = require('./helper');
//const {elem1,elem2,....} = require('somelibary');

console.log(P);
console.log(FN);
console.log(LN);
console.log(ADDR);

console.log(mf);

mf();

console.log(myMethod2);

myMethod2();

console.log(myMethod3);

myMethod3();

myMethod4();


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

app.post('/getmymission',function(req,res){
    res.send('Our Mission Mission to educate student for coding');
});

app.post('/getuserinfo',(req,res)=>{
    let firstname = req.params.fname;
    console.log(firstname);
   //HTTP Status Code
   //res.status(200).json({ "username":  req.body.uname });
   res.status(200).json({"firstname":firstname});

});



//app.listen(PORT,()=>{  //Fat Arrow Function to create cbfn
  //  console.log(`The server is running on Port ${ PORT } `);
///})

//We are going to create a route
