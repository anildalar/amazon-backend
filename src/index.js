    const express = require('express');
    const app = express();

    const env = require('dotenv');
    env.config();

    //import someting from somelibary  mjs
    // const { a,b,c,d,e } = require();     
    //const { nameimport1,namedimport2,..... } = require('somelibary');      cjs

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

    app.listen(process.env.PORT,()=>{
        console.log(`The server is running on port ${process.env.PORT}  `);
    });