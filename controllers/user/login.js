const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
// app.use(express.json());


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


router.get('/' , (req , res , next)=>{

    res.render('login');
});

router.post('/' , (req , res , next)=>{
//    console.log(req.body.userName);
//    console.log(req.body.password);
    model.User.findOne({email:req.body.userName}).then(result =>{
       
        if(result.email == req.body.userName && result.password == req.body.password){
            // res.send('you rae successfully login');
            res.redirect('/');
            next();
        }
        else{
            // res.redirect('/index.html');
            res.send('login Faild!');
            next();
        }
        
    })

});


module.exports = router;