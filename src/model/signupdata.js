const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true,useUnifiedTopology: true });

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    firstname:String,
    lastname:String,
    username:String,
    phonenumber:String,
    email:String,
    password:String,
    

}); 

var signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = signupdata;

