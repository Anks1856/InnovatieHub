const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../MongoDB/model');
const addDetailsRouter = require('./addDetails');


router.use('/addDetails' , addDetailsRouter);

module.exports = router;