const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
// app.use(express.json());


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

router.post('/' , (req , res , next)=>{
    console.log(req.body);
    model.Idea.find(req.body)
    .then(result =>{
        console.log(result);
        res.send(result);
        next();
    }).catch(err =>{
        console.log(err);
        res.send('please try again');
    });
    // res.send('contact logic here!');
    // next();
});


module.exports = router;