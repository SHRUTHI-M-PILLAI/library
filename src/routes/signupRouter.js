const express = require('express');
const signupdata = require('../model/signupdata');
const signupRouter = express.Router();



function router(navIndex){
        
    signupRouter.get('/',function(req,res){
        res.render('signup',{
            navIndex,
            title: 'Library'
        });
    });

    signupRouter.post('/add',function(req,res){
        var item = {

        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        password:req.body.password

        }
    

        var signup =  signupdata(item);
        signup.save();
        res.redirect('/login');
        
    });

    
return signupRouter;

}

module.exports = router;  