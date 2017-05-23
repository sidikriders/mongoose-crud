var express = require('express');
var router = express.Router();
var fung = require('../controller/book-mongooseController.js')

/* GET home page. */
router.get('/', fung.showBooks);

router.post('/', fung.addBooks);

router.get('/:id', fung.findBookById);

router.put('/:id', fung.updateBooksbyId);

router.delete('/:id', fung.deleteBookById);

module.exports = router;
