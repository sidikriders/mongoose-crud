var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost/library'
var Book = require('../models/books.js')

function addBooks(req, res, next) {
  Book.create(req.body, (err, rec) => {
    if (err) {
      res.send(err)
    } else {
      res.send(rec + '\nsudah berhasil di tambah!!')
    }
  })
}

function showBooks(req, res, next) {
  Book.find({},  (err, rec) => {
    if (err) {
      res.send(err)
    } else if (rec.length < 1) {
      res.send('daftar buku masih kosong')
    } else {
      res.send(rec)
    }
  })
}

function findBookById(req, res, next) {
  Book.findOne({
    _id: req.params.id
  }, (err, data) => {
    if (err) {
      res.send(err)
    } else if (data == null) {
      res.send('tidak ditemukan')
    } else {
      res.send(data)
    }
  })
}

function updateBooksbyId(req, res, next) {
  Book.updateOne({
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

function deleteBookById(req, res, next) {
  Book.deleteOne({
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
  showBooks,
  addBooks,
  findBookById,
  updateBooksbyId,
  deleteBookById
}
