const express = require('express');
const indexRouter = express.Router();

function router(navIndex){
   

indexRouter.get('/',function(req,res){
    res.render("index",
    {
            navIndex,
            title:'Library',
               
    });
});

    return indexRouter;

}

module.exports = router;