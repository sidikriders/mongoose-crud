var express = require('express');
var router = express.Router();
var fung = require('../controller/book-mongooseController.js')
var fungsi = require('../controller/trans-mongooseController.js')
var fanksyen = require('../controller/cust-mongooseController.js')

/* GET home page. */
router.get('/books', fung.showBooks);

router.post('/books', fung.addBooks);

router.get('/books/:id', fung.findBookById);

router.put('/books/:id', fung.updateBooksbyId);

router.delete('/books/:id', fung.deleteBookById);

router.get('/trans', fungsi.showTrans)

router.post('/trans', fungsi.addTrans)

router.get('/trans/:id', fungsi.findTransById)

router.put('/trans/:id', fungsi.updateTransbyId)

router.delete('/trans/:id', fungsi.deleteTransById)

router.get('/cust', fanksyen.showCust)

router.post('/cust', fanksyen.addCust)

router.get('/cust/:id', fanksyen.findCustById)

router.put('/cust/:id', fanksyen.updateCustbyId)

router.delete('/cust/:id', fanksyen.deleteCustById)

module.exports = router;
