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



//Update Operation
router.put("/student/:stu_id",(req,res)=>{
    console.log(req.params.stu_id);
    //let i = req.params.stu_id;
    //Promise Chain
    //PromiseObject.then().then().then().catch().finally();
    StudentModel.findOneAndUpdate({ _id:req.params.stu_id },req.body).then((d)=>{
        //data
        res.status(200).json({
            msg:'Successfully Updated',
            d:req.body,
            id:req.params.stu_id
        });
    }).catch(function(e){
        //error
    }).finally(()=>{
        //Both
    });
});

router.delete('/student/:id',function(req,res){
    //PromiseObject.then().then().then().catch().finally();
    StudentModel.findOneAndDelete({_id:req.params.id}).then((student)=>{
        res.status(200).send({
            msg:"Record Deleted Successfully"
        });
    }).catch(()=>{

    }).finally(()=>{

    });
    
});



module.exports = router;