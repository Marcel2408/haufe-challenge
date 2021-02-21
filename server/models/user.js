const validator = require('validator');
const mongoose = require('.');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: [true, 'Please tell us your email!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please specify your password!'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
  },
  favourites: [String],
  // timeStamp: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// todo create authController.js
// todo create a singup fn with req, res, next
// todo create anew user with req.body and return the newUser
// todo catchAsync the signup fn
