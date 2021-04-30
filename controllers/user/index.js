const express = require('express');
const app = express();
const router = express.Router();
const loginRouter = require('./login');
const registerRouter = require('./registration');

router.get('/' , (req , res , next)=>{

    res.send('user controller is working fine!');
    next();
});

router.use('/login' , loginRouter);
router.use('/register' , registerRouter)

module.exports = router;
