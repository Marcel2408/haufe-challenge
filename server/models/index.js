const mongoose = require('mongoose');

const database = process.env.DATABASE;

mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
