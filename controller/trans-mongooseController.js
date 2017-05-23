
var Trans = require('../models/trans.js')

function addTrans(req, res, next) {
  Trans.create(req.body, (err, rec) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rec + '\nsudah berhasil di tambah!!')
    }
  })
}

function showTrans(req, res, next) {
  Trans.find().populate('booklist').exec((err, rec) => {
    if (err) {
      res.send(err)
    } else if (rec.length < 1) {
      res.send('daftar transaksi masih kosong')
    } else {

      res.send(rec)
    }
  })
}

function findTransById(req, res, next) {
  Trans.findOne({
    _id: req.params.id
  }).populate('booklist').exec((err, data) => {
    if (err) {
        res.send(err)
      } else if (data == null) {
        res.send('tidak ditemukan')
      } else {
        res.send(data)
      }
    })
}

function updateTransbyId(req, res, next) {
  Trans.updateOne({
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

function deleteTransById(req, res, next) {
  Trans.deleteOne({
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
  showTrans,
  addTrans,
  findTransById,
  updateTransbyId,
  deleteTransById
}
