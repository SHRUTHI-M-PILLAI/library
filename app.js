const express = require('express');
const app = new express();

const nav = [
    
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/updates',name:"New Updates"
    },
    {
        link:'/index',name:'Logout'
    },
    
];

const navIndex = [
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'Signup'
    }
];

app.use(express.static('./public'));

const indexRouter = require('./src/routes/indexRouter')(navIndex);
const booksRouter = require('./src/routes/booksRouter')(nav);
const authorRouter = require('./src/routes/authorRouter')(nav);
const loginRouter = require('./src/routes/loginRouter')(navIndex);
const signupRouter = require('./src/routes/signupRouter')(navIndex);
const updatesRouter = require('./src/routes/updatesRouter')(nav);


app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/index',indexRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/updates',updatesRouter);

app.get('/',function(req,res){
    res.render("index",
    {
               navIndex,
               title:'Library'
                });
});


app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');


app.listen(5500);






