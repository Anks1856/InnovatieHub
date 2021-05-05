const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const model = require('../../MongoDB/model');


app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req , res , next)=>{
    model.Idea.find({}).exec().then(ideas =>{
        console.log('get ideas');
        res.render('index', {ideas:ideas});
    }).catch(err => {
        console.log(err);
    }) 
   
});


module.exports = router;