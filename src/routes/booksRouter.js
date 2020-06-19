const express = require('express');
const booksRouter = express.Router();
function library(nav){
    var books = [
        {
            title:'Anna Karenina',
            author:'Leo Tolstoy',
            genre:'Story',
            img:"anna.jpg",
            description:'Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky.'
          },
    {
        title:'Madame Bovary',
        author:'Gustave Flaubert',
        genre:'Story',
        img:"bovary.jpg",
        description:'For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for offenses against morality and religion. What shocks us today about Flauberts devastatingly realized tale of a young woman destroyed by the reckless pursuit of her romantic dreams is its pure artistry: the poise of its narrative structure, the opulence of its prose (marvelously captured in the English translation of Francis Steegmuller), and its creation of a world whose minor figures are as vital as its doomed heroine. In reading Madame Bovary, one experiences a work that remains genuinely revolutionary almost a century and a half after its creation.'
    },
    {
        title:'War and Peace',
        author:'Leo Tolstoy',
        genre:'Story',
        img:"war&peace.jpg",
        description:'Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleons invasion of Russia, and the impact of the Napoleonic era on Tsarist society, as seen through the eyes of five Russian aristocratic families'
    },
    {
        title:'The Great Gatsby',
        author:'F. Scott Fitzgerald',
        genre:'Story',
        img:"great.jpg",
        description:'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared. At the same time, Prohibition, the ban on the sale and manufacture of alcohol as mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, like Nick Carraway in his novel, idolized the riches and glamor of the age, he was uncomfortable with the unrestrained materialism and the lack of morality that went with it, a kind of decadence.'
    },
    {
        title:'Lolita',
        author:'Vladimir Nabokov',
        genre:'Story',
        img:"lolita.jpg",
        description:'The book is internationally famous for its innovative style and infamous for its controversial subject: the protagonist and unreliable narrator, middle aged Humbert Humbert, becomes obsessed and sexually involved with a twelve-year-old girl named Dolores Haze.'
    },
    {
        title:'Middlemarch',
        author:'George Eliot',
        genre:'Story',
        img:"middlemarch.jpg",
        description:'Middlemarch: A Study of Provincial Life is a novel by George Eliot, the pen name of Mary Anne Evans, later Marian Evans. It is her seventh novel, begun in 1869 and then put aside during the final illness of Thornton Lewes, the son of her companion George Henry Lewes.Subtitled "A Study of Provincial Life", the novel is set in the fictitious Midlands town of Middlemarch during the period 1830–32.'

    },
    {
        title:'The Adventures of Huckleberry Finn',
        author:'Mark Twain',
        genre:'Story',
        img:"adventure.jpg",
        description:'Revered by all of the towns children and dreaded by all of its mothers, Huckleberry Finn is indisputably the most appealing child-hero in American literature. Unlike the tall-tale, idyllic world of Tom Sawyer, The Adventures of Huckleberry Finn is firmly grounded in early reality. From the abusive drunkard who serves as Huckleberrys father, to Hucks first tentative grappling with issues of personal liberty and the unknown, Huckleberry Finn endeavors to delve quite a bit deeper into the complexities. both joyful and tragic of life.'
    }
    ]
    booksRouter.get('/',function(req,res){
    res.render("books",{
        nav,
             title:'Library',
            books
    });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
              title:'Library',
            book: books[id]
        });
    });

    return booksRouter;
}



module.exports = library;

