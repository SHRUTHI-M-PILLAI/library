const express = require('express');
const authorRouter = express.Router();
function author(nav){
    var authors = [
        {
            authorname:'William Shakespeare',
            dob:'April 23, 1564',
            img:"shakespere.jpg",
            description:'Many of Shakespeare’s plays have been known to be among the greatest in Western literature. He wrote tragedies, histories, comedies, and romances.'

    },
    {
        authorname:'Vaikom Muhammad Basheer',
        dob:'(21 January 1908 – 5 July 1995)',
        img:"basheer.jpg",
        description:'He was also a recipient of the Sahitya Akademi Fellowship, Kerala Sahitya Akademi Fellowship, and the Kerala State Film Award for Best Story.'
},
{
    authorname:'Krishna Sobti',
    dob:'(18 February 1925 – 25 January 2019)',
    img:"sobti.jpg",
    description:'She won the Sahitya Akademi Award in 1980 for her novel Zindaginama and in 1996, was awarded the Sahitya Akademi Fellowship, the highest award of the Akademi.'

},
{
    authorname:'Jane Austen',
    dob:'(born December 16, 1775-died July 18, 1817)',
    img:"jane.jpg",
    description:'She published four novels during her lifetime-Sense and Sensibility (1811), Pride and Prejudice (1813), Mansfield Park (1814), and Emma (1815).'

},
{
    authorname:'Lalithambika Antharjanam',
    dob:'(March 30, 1909–February 6, 1987)',
    img:"lalithambika.jpg",
    description:'She was influenced by Mahatma Gandhi and social reform movements among the Nambudiri caste led by V. T.'

}
]
authorRouter.get('/',function(req,res){
    res.render("authors",{
        nav,
             title:'Library',
            authors
    });
    });
    
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
              title:'Library',
            author: authors[id]
        });
    });

    return authorRouter;
}



module.exports = author;
