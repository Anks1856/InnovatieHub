const mongoose = require('mongoose');
const schema = require('./schema');


mongoose.connect("mongodb://localhost/InnovativeHub").then(result =>{
    console.log("connected to mongoDB....");
}).catch(err =>{
    console.log("Unable to connect MongoDB....");
});


const User = mongoose.model('User' , schema.userSchema);
const Contact = mongoose.model('Contact' , schema.contactSchema);
const Idea = mongoose.model('Idea', schema.ideaSchema);

module.exports = {User , Contact , Idea};
