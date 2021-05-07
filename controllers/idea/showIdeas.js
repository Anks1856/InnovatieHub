const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const model = require('../../MongoDB/model');


app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req , res , next)=>{
    model.Idea.find({}).sort({$natural: -1}).exec().then(ideas =>{
        console.log('get ideas');
        console.log(ideas);
        const threeIdeas = ideas.slice(0,2);
        res.render('index', {ideas:ideas , threeIdeas : threeIdeas});
    }).catch(err => {
        console.log(err);
    }) 
   
});
router.get('/:id/details', (req , res , next)=>{
    model.Idea.findOne({_id : req.params.id}).exec().then(ideas =>{
        console.log('get idea');
        // console.log(ideas);
        
        res.render('idea-details1', {ideas:ideas });
    }).catch(err => {
        console.log(err);
    }) 
   
});


module.exports = router;