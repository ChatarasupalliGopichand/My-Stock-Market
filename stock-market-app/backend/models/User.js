const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  watchlist: [String], // Array of stock symbols
});

module.exports = mongoose.model('User', UserSchema);
