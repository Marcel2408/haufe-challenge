const express = require('express');
const {
  getAllCharacters,
} = require('./controllers/character/characterController');
const { createUser } = require('./controllers/user/userController');

const router = express.Router();

router.route('/api/v1/user').post(createUser);
router.route('/api/v1/character').get(getAllCharacters);

module.exports = router;
