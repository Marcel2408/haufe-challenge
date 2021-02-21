const express = require('express');
const {
  getAllCharacters,
} = require('./controllers/character/characterController');
const { createUser } = require('./controllers/user/userController');
const { signup } = require('./controllers/auth/authController');

const router = express.Router();

router.post('/api/v1/user/signup', signup);

router.route('/api/v1/user').post(createUser);
router.route('/api/v1/character').get(getAllCharacters);

module.exports = router;
