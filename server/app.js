const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const AppError = require('./utils/error-handler/appError');
const globalErrorHandler = require('./utils/error-handler/errorHandler');

dotenv.config();
const app = express();
const router = require('./router');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitizer());

app.use((req, res, next) => {
  console.log('this is the cookie --> ', req.cookies);
  next();
});

app.use(router);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
