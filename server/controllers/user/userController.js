const user = require('../../models/user');

exports.createUser = async (req, res) => {
  try {
    const postedUser = await user.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        user: postedUser,
      },
    });
  } catch (error) {
    console.log('error at user controller', error);
    res.sendStatus(500);
  }
};
