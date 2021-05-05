const express = require('express');
const app = express();
const userRouter = require('./controllers/user/index');
const contactRouter = require('./controllers/contact/contact');
const IdeaRouter = require('./controllers/idea/index');
const Profile = require('./controllers/profile/index'); 


app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/home' , (req , res)=>{
    res.render('index');
});



app.use(express.static('views'))
// app.use(express.static('public'));
app.use('/user' ,userRouter);
app.use('/contact' , contactRouter);
app.use('/idea' ,IdeaRouter);
app.use('/profile' ,Profile );

app.listen(3000 , ()=>{
    console.log('server is running on port 3000....');
})
