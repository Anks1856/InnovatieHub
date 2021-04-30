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


module.exports = {userSchema , contactSchema};