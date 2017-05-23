
var Book = require('../models/books.js')
var Trans = require('../models/trans.js')
var Cust = require('../models/cust.js')

function showMeTheData(req, res, next) {
  Book.find().exec( (err, dataBook) => {
    Cust.find().exec( (err, dataCust) => {
      Trans.find().populate('booklist').exec( (err, dataTrans) => {
        res.send('-------------List Book:-------------\n\n' + dataBook + '\n\n-------------List Customer:-------------\n\n' + dataCust + '\n\n-------------List Transaction:-------------\n\n' + dataTrans)
      })
    })
  })
}

module.exports = {
  showMeTheData
}
