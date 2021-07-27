//1. Import Area
var express = require('express')
//const obj = library()
const app = express()

let port = 5000;

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

app.listen(port,()=>{  //Fat Arrow Function to create cbfn
    console.log(`The server is running on Port ${ port } `);
})

//We are going to create a route
