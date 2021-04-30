const mongoose = require('mongoose');
const schema = require('./schema');


mongoose.connect("mongodb://localhost/InnovativeHub").then(result =>{
    console.log("connected to mongoDB....");
}).catch(err =>{
    console.log("Unable to connect MongoDB....");
});


const User = mongoose.model('User' , schema.userSchema);
const Contact = mongoose.model('Contact' , schema.contactSchema);


module.exports = {User , Contact};
