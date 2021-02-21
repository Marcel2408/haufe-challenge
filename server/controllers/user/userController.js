const User = require('../../models/user');
const catchAsync = require('../../utils/catchAsync');

exports.updateFavs = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { favourites: req.body.favourites },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});
