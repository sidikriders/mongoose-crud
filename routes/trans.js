var express = require('express');
var router = express.Router();
var fungsi = require('../controller/trans-mongooseController.js')

router.get('/', fungsi.showTrans)

router.post('/', fungsi.addTrans)

router.get('/:id', fungsi.findTransById)

router.put('/:id', fungsi.updateTransbyId)

router.delete('/:id', fungsi.deleteTransById)

module.exports = router;
