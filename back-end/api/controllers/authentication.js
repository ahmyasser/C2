//import { link } from 'fs';

table = require('../models/users');
var mongoose = require('mongoose'),
    moment = require('moment'),
    Validations = require('../utils/Validations'),
    hoba = mongoose.model('users');
//hoba2 = mongoose.model('users');  

module.exports=(router) =>{
    router.post('/login' , (req , res)=>{

        let users = new hoba({
            email:req.body.email.toLowerCase(),
            //fullname:req.body.fullname.toLowerCase(),
            password:req.body.password
        });
    hoba.findOne({email : req.body.email , password :req.body.password} ,function(err , users)   {
        if(err){
            //console.log(err);
            //console.log('1');
            res.send('aaa');
            //return res.status(500).send();

        }
        if(!users){
            //return res.status(404).send();
            //console.log('1');
            res.send('Wrong password');
        }
        else{
            //res.render("http://localhost:4200/#/dashboard");
            console.log('adasd');

            res.json({

                success:false , message: 'doneeee'


            });
        }
        //res.send('ccc');
        return res.status(200).send();


    })



});


    router.post('/register' , (req , res)=>{


        let users = new hoba({
            email:req.body.email.toLowerCase(),
            fullname:req.body.fullname.toLowerCase(),
            password:req.body.password
        });

    //users.save((hoba.body));

    users.save((err)=>{
        if(err){
            res.send('not Saved');

        }
        else{
            users.save((hoba.body));
    res.json({
        success:false , message: 'saved '
    });
}
})
});

    return router;
}
/*module.exports=(router) =>{
    
    router.get('/login' , (req , res)=>{
        res.json({
             success:false , message: 'here '
         });
         
    });
     
    return router;
}*/

       
