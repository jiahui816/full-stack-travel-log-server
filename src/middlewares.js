const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
  // Forward Things on to the error handler
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  // Set a stack trace for debugging (Only do in development)
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Check the status is still 200, then by default is 500 otherwise
  res.status = statusCode;
  res.json({
    message: error.message,
    stack:
      process.env.NODE_ENV === 'production' ? 'Nothing to show' : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
