const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  data: Array, // Store historical data or other relevant information
});

module.exports = mongoose.model('Stock', StockSchema);
