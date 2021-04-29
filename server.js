const express = require('express');
const app = express();
const userRouter = require('./controllers/user/index')
// app.use(express.json());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

app.get('/' , (req , res)=>{
    res.sendFile(__dirname + '/public/index.html');
});
app.post('/don/bon' , (req , res )=>{
    console.log(req.body.firstName);
    res.send('abbe lavde!');
})



app.use(express.static('public'));
app.use('/user' , userRouter);


app.listen(3000 , ()=>{
    console.log('server is running on port 3000....');
})

// var express = require('express');
// var app = express();

// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//     res.sendFile(__dirname +'/login.html');
// });

// app.post('/submit-student-data', function (req, res) {
//     var name = req.body.firstName + ' ' + req.body.lastName;
    
//     res.send(name + ' Submitted Successfully!');
// });

// var server = app.listen(5000, function () {
//     console.log('Node server is running..');
// });