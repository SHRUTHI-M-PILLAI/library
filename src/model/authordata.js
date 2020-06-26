const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    authorname: String,
    dob:String,
    description:String,
    jpg:String
}); 

var authordata = mongoose.model('Authordata',AuthorSchema);

module.exports = authordata;




