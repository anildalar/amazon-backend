//1. Import Area
var express = require('express')
//const obj = library()
const app = express()
const mongoose = require('mongoose');


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
app.listen(5000, () => {  //Fat Arrow Function to create cbfn
    console.log(`The server is running on Port 5000 `);
})

    //We are going to create a route
