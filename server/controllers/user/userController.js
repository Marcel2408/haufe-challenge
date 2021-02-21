const User = require('../../models/user');
const catchAsync = require('../../utils/catchAsync');

exports.createUser = catchAsync(async (req, res, next) => {
  const postedUser = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      user: postedUser,
    },
  });
});
