const express = require('express');
const updatesRouter = express.Router();
function router(nav){
    var updates = [
        {
            title:'Midnight Sun',
            img:"library1.jpg",
            
          },
          {
            title:'Stephen King',
            
            img:"stephenking.jpg",
            
          },
          {
            title:'James Byrd',
            
            img:"jamesbyrd.jpg",
            
          }
        ]

        updatesRouter.get('/',function(req,res){
            res.render("signup",{
                nav,
                     title:'Library',
                    updates
            });
            });
            
            
        
            return libraryRouter;
        }
        
        
        
        module.exports = router;