const express = require('express');
const indexRouter = express.Router();
function author(){
    const nav = [
        {
            link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
}
]
indexRouter.get('/',function(req,res){
    res.render("index",
    {
                nav,
               title:'Library',
               
    });
});

    return indexRouter;

}

module.exports = author;