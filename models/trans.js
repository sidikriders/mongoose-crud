var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var transSchema = new Schema({
  "memberId": String,
  "days": Number,
  "out_date": Date,
  "due_date": Date,
  "in_date": Date,
  "fine": Number,
  "booklist": [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

var Trans = mongoose.model('Trans', transSchema);

module.exports = Trans;
