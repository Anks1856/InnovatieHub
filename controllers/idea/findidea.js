const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const model = require('../../MongoDB/model');


app.use(bodyParser.urlencoded({ extended: false }));

router.get('/' , (req , res , next) => {
    res.render('search-ideas')
} )

router.post('/' , (req , res , next)=>{
    // console.log(req.body);
    
    model.Idea.find(req.body)
    .then(result =>{
        console.log(result);
        res.render('search-ideas');
        next();
    }).catch(err =>{
        console.log(err);
        res.send('please try again');
    });
    
});


module.exports = router;