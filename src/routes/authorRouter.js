const express = require('express');
const authorRouter = express.Router();
const authordata = require('../model/authordata');

function router(nav){

authorRouter.get('/',function(req,res){
    authordata.find()
    .then(function(authors){
        res.render("authors",{
            nav,
                 title:'Library',
                authors
        });
    })
    
    });
    
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        authordata.findOne({_id: id})
        .then(function(author){
            res.render('author',{
                nav,
                  title:'Library',
                author
            });
        })
        
    });

    authorRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        authordata.findOneAndDelete({_id: id})
        .then(function(book){
            alert('one author page deleted');
            res.redirect('/authors',{
                nav,
                tile:'Library',
                author
            });
        });
        
    });


    authorRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        authordata.findOne({_id: id})
        .then(function(book){
        res.render('updatebook',{
            nav,
            title: 'Library',
            book
        });
    })


});

authorRouter.post('/update/wow/:id',function(req,res){
    const id= req.params.id;

    var item = 
            authordata.updateOne({_id:req.params.id,id},
                {title:req.body.title,
                author:req.body.author,
                description:req.body.description,
                genre:req.body.genre,
                image:req.body.image})
                
                .then(function(author){
                    res.redirect('/author',{
                        nav,
                        title:'Library',
                        author
                    });
                });      

            });

    return authorRouter;
}




module.exports = router;
