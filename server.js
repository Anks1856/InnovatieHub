const express = require('express');
const app = express();
const userRouter = require('./controllers/user/index');
const contactRouter = require('./controllers/contact/contact');
const IdeaRouter = require('./controllers/idea/index');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/' , (req , res)=>{
    res.sendFile(__dirname + '/public/index.html');
});




app.use(express.static('public'));
app.use('/user' , userRouter);
app.use('/contact' , contactRouter);
app.use('idea' , IdeaRouter);


app.listen(3000 , ()=>{
    console.log('server is running on port 3000....');
})
