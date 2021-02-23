const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/error-handler/appError');
const { createSendToken } = require('./utils');

exports.signup = catchAsync(async (req, res, next) => {
  // console.log(req.body);
  const { name, email, password, passwordConfirm } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }

  const user = await User.findOne({ email }).select('+password'); // added '+' to select non-default field 'password'

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You're not logged in! Please log in to have access", 401)
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
});
