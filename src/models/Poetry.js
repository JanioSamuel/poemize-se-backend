const mongoose = require('mongoose');

const PoetrySchema = new mongoose.Schema({
  title: String,
  poetry: String,
  author: String,
})

module.exports = mongoose.model('Poetry', PoetrySchema);