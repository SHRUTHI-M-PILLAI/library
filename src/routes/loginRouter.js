const express = require('express');
const loginRouter = express.Router();


function router(navIndex){


    loginRouter.get('/',function(req,res){
        res.render("login",{
            navIndex,
            title: 'Library'
        });
    });
    

return loginRouter;

}

module.exports = router;