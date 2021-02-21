class AppError extends Error {
  constructor(message, statusCode) {
    super(message); //sets the message property to the incoming error

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // not triggering when the error is programming or a bug

    Error.captureStackTrace(this, this.constructor); // not showing this constructor in the err.stack
  }
}

module.exports = AppError;
