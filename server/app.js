const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const AppError = require('./utils/error-handler/appError');
const globalErrorHandler = require('./utils/error-handler/errorHandler');

dotenv.config();
const app = express();
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
