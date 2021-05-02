const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
const uploadideaRouter = require('./uploadidea');


router.use('/upload' , uploadideaRouter);

module.exports = router;