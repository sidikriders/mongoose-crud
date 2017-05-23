var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var custSchema = new Schema({
  "name":String,
  "memberId":String,
  "address":String,
  "zipcode":Number,
  "phone":String
})

var Cust = mongoose.model('Cust', custSchema);

module.exports = Cust;
