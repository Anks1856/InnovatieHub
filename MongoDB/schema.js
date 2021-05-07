const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String ,
    email : String,
    password : String
});

const contactSchema = new mongoose.Schema({
    firstName : String ,
    email : String ,
    subject : String ,
    comment : String 
});

const ideaSchema = new mongoose.Schema({
    title : String,
    img : String,
    category : String ,
    video : String ,
    description : String ,
    publishedDate : {
        type : Date,
        default : new Date()
    },
    authorName : String ,
    country : String ,
    implPro : Boolean,
    sellable : Boolean ,
    sellPrice : Number ,
    BankName : String ,
    AccountNumber : String ,
    IFSCcode : String

})


module.exports = {userSchema , contactSchema , ideaSchema};