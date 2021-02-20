const mongoose = require('.');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  favourites: [String],
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
