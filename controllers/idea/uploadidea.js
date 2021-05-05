const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
// app.use(express.json())
const fs = require('fs');
const path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));



var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });


router.get('/' , (req , res , next)=>{

    res.render('add-ideas');
});
router.post('/' , upload.fields([{name : 'displayPic' },{ name : 'video'} ]) ,(req , res , next)=>{
    console.log(req.body);
    // console.log(req.files.video[0].fieldname);
    const obj = {
        title : req.body.title,
        displayPic : fs.readFileSync(path.join(__dirname + '/../../uploads/'+ req.files.displayPic[0].filename)),
        category : req.body.category,
        video : fs.readFileSync(path.join(__dirname + '/../../uploads/'+ req.files.video[0].filename)),
        description : req.body.description,
        sellable : req.body.sellable ,
        sellPrice : req.body.sellPrice ,
        BankName : req.body.BankName ,
        AccountNumber : req.body.AccountNumber,
        IFSCcode : req.body.IFSCcode
    }
    console.log(obj);
    const contact = new model.Idea(obj);
    // console.log(contact);

    contact.save().then(result =>{
        // console.log(result);
        res.redirect('/idea-details1.html');
        next();
    }).catch(err =>{
        console.log(err);
        res.send('please try again');
    });
    // res.send('contact logic here!');
    // next();
});


module.exports = router;