const jwt = require('jsonwebtoken');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieTimeToExpire = process.env.JWT_COOKIE_EXPIRES_IN;
  const cookieOptions = {
    expires: new Date(Date.now() + cookieTimeToExpire),
    httpOnly: true,
  };
  //? in production I'll add 'secure: true' in order to only send cookie if https protocol is used
  res.cookie('jwt', token, cookieOptions);

  user.password = undefined; // to remove password from response

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
