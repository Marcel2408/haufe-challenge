const express = require('express');
const { getAllCharacters } = require('./controllers/characterController');

const router = express.Router();

router.route('/api/v1/characters').get(getAllCharacters);

module.exports = router;
