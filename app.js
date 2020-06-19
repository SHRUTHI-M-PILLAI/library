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
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'SignUp'
    }
];

 
const booksRouter = require('./src/routes/booksRouter')(nav)
const authorRouter = require('./src/routes/authorRouter')(nav)
const indexRouter = require('./src/routes/indexRouter')
const loginRouter = require('./src/routes/loginRouter')(nav)
const signupRouter = require('/src/routes/signupRouter')(nav)
const updatesRouter = require('/src/routes/libraryRouter')(nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/index',indexRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/updates',updatesRouter);

app.get('/',function(req,res){
    res.render("index",
    {
                nav,
                
               title:'Library'
    });
});


app.listen(5500);






