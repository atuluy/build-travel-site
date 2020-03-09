exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Welcome to the supetr secret area"
  });
};
