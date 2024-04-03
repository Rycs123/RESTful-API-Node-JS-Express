const responseData = function (response, statusCode, values) {
  response.status(statusCode).json(values); // Mengirim data langsung tanpa objek "success"
  response.end();
};

const responseMessage = function (response, statusCode, message) {
  var data = {
    success: true,
    message: message,
  };
  response.status(statusCode).json(data);
  response.end();
};

module.exports = { responseData, responseMessage };
