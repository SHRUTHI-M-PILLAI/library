const express = require('express');
const signupRouter = express.Router();



function router(navIndex){
        
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            navIndex,
            title: 'Library'
        });
    });
    

return signupRouter;

}

module.exports = router;  