const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
app.use(express.json());


router.post('/' , [express.json()],(req , res , next)=>{
    // console.log(req.body);
    const user = new model.User(req.body)
    user.save().then(result =>{
        console.log(result);
        res.redirect('/login.html')
        next();
    }).catch(err =>{
        if(err) throw err;
        res.send('unable to save data!');
        next();
    })

    
});


module.exports = router;