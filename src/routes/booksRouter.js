const express = require('express');
const booksRouter = express.Router();
const bookdata = require('../model/bookdata');
function library(nav){
    
    booksRouter.get('/',function(req,res){
        bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
        });
        
         })

        });
            
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        bookdata.findOne({_id: id})
        .then(function(book){
            res.render('book',{
                nav,
                  title:'Library',
                book
            });
        })
        
    });

       booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        bookdata.findOneAndDelete({_id: id})
        .then(function(book){
            alert('one book deleted');
            res.redirect('/books',{
                nav,
                tile:'Library',
                book
            });
        });
        
    });
 
    booksRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        bookdata.findOne({_id: id})
        .then(function(book){
        res.render('updatebook',{
            nav,
            title: 'Library',
            book
        });
    })


});

booksRouter.post('/update/wow/:id',function(req,res){
    const id= req.params.id;

    var item = 
            bookdata.updateOne({_id:req.params.id,id},
                {title:req.body.title,
                author:req.body.author,
                description:req.body.description,
                genre:req.body.genre,
                image:req.body.image})
                
                .then(function(book){
                    res.redirect('/book',{
                        nav,
                        title:'Library',
                        book
                    });
                });      

            });

    return booksRouter;
}



module.exports = library;

