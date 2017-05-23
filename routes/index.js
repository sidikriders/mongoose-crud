var express = require('express');
var router = express.Router();
var fung = require('../controller/general-mongooseController.js')

/* GET home page. */
router.get('/', fung.showMeTheData);

module.exports = router;
