// All middleware is is a function that gets ran right after the http response... next tells node to run the next middleware function or to finally send the reponse back to the user
const errorHandler = (error, request, response, next) => {
  const statusCode = response.statusCode ? response.statusCode : 500;

  response.status(statusCode);

  response.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

module.exports = {
  errorHandler,
};
