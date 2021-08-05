const express = require('express');

const router = express.Router();

const StudentModel = require('../models/studentModels');

//Lets Create the api
router.post('/students',(req,res)=>{
    //1. You can recieve the post json data only if you are using express.json middleware
    console.log(req.body);

    //3. Lets Store the data in mongoose DB

    StudentModel.create(req.body).then(function(student){
        res.status(200).json({ // HTTP Status code 200 = OK
            msg:"Data sent successffully"
        });
    }).catch((err)=>{
        res.status(400).json({ // HTTP Status code 200 = OK
            msg:"Unable to store sent successffully"
        });
    });
    
    
});

module.exports = router;