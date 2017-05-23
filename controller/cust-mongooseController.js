
var Cust = require('../models/cust.js')

function addCust(req, res, next) {
  Cust.create(req.body, (err, rec) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rec + '\nsudah berhasil di tambah!!')
    }
  })
}

function showCust(req, res, next) {
  Cust.find().exec((err, rec) => {
    if (err) {
      res.send(err)
    } else if (rec.length < 1) {
      res.send('daftar customer masih kosong')
    } else {
      res.send(rec)
    }
  })
}

function findCustById(req, res, next) {
  Cust.findOne({
    _id: req.params.id
  }).exec((err, data) => {
    if (err) {
        res.send(err)
      } else if (data == null) {
        res.send('tidak ditemukan')
      } else {
        res.send(data)
      }
    })
}

function updateCustbyId(req, res, next) {
  Cust.updateOne({
    _id: req.params.id
  }, req.body, (err, data) => {
    if (err) {
      res.send(err)
    } else if (data.length < 1) {
      res.send('ga ketemu')
    } else {
      res.send(data + '\nberhasil di update')
    }
  })
}

function deleteCustById(req, res, next) {
  Cust.deleteOne({
    _id: req.params.id
  }, (err) => {
    if (err) {
      res.send(err)
    } else {
      res.send('sepertinya sudah berhasil di hapus')
    }
  })
}

module.exports = {
  showCust,
  addCust,
  findCustById,
  updateCustbyId,
  deleteCustById
}
