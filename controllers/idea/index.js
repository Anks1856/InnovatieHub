const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
const uploadideaRouter = require('./uploadidea');
const findideaRouter = require('./findidea');
const showideaRouter = require('./showIdeas');



var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


router.use('/upload' , uploadideaRouter);
router.use('/find' , findideaRouter);
router.use('/show' ,showideaRouter);

module.exports = router;