const validator = require('validator');
const bcrypt = require('bcryptjs');
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
    select: false, // not to show password when finding users from db
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      // only works on CREATE and SAVE
      validator: function (password) {
        return password === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
  favourites: {
    type: [Number],
    default: [],
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12); // hash password with a cost of 12
  this.passwordConfirm = undefined; // deletes this field before saving into DB
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
