const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const model = require('../../MongoDB/model');


app.use(bodyParser.urlencoded({ extended: false }));

router.get('/' , (req , res , next) => {
    res.render('search-ideas')
} )

router.get('/' , (req , res , next)=>{
    // console.log(req.body);
    model.Idea.find({}).sort({$natural: -1}).exec().then(ideas =>{
        console.log('get ideas');
      
        res.render('search-ideas', {ideas:ideas});
    }).catch(err => {
        console.log(err);
    }) 
    
    
});


module.exports = router;