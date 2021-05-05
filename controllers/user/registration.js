const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
app.use(express.json());


router.get('/' , (req , res , next)=>{

    res.render('sign-up');
});

router.post('/' , [express.json()],(req , res , next)=>{
    // console.log(req.body);
    const user = new model.User(req.body)
    user.save().then(result =>{
        console.log(result);
        res.redirect('/user/login')
        next();
    }).catch(err =>{
        if(err) throw err;
        res.send('unable to save data!');
        next();
    })

    
});


module.exports = router;