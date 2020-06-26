const express = require('express');
const admin1Router = express.Router();
const authordata = require('../model/authordata');

function router(nav){
    admin1Router.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title: 'Library'
        })
    })

    admin1Router.post('/add',function(req,res){
        var item = {

        authorname: req.body.authorname,
        dob: req.body.dob,
        description:req.body.description,
        jpg: req.body.image

        }
        

       var author =  authordata(item);
        author.save();
        res.redirect('/authors');
        
    });

    return admin1Router;
}


module.exports = router;


