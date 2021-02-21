const express = require('express');
const {
  getAllCharacters,
} = require('./controllers/character/characterController');
const { updateFavs } = require('./controllers/user/userController');
const { signup, login, protect } = require('./controllers/auth/authController');

const router = express.Router();

router.post('/api/v1/user/signup', signup);
router.post('/api/v1/user/login', login);

router.route('/api/v1/user/update').patch(protect, updateFavs);
router.route('/api/v1/character').get(protect, getAllCharacters);

module.exports = router;
