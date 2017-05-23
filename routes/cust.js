var express = require('express');
var router = express.Router();
var fanksyen = require('../controller/cust-mongooseController.js')

router.get('/', fanksyen.showCust)

router.post('/', fanksyen.addCust)

router.get('/:id', fanksyen.findCustById)

router.put('/:id', fanksyen.updateCustbyId)

router.delete('/:id', fanksyen.deleteCustById)

module.exports = router;
