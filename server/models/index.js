const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

module.exports = mongoose;
