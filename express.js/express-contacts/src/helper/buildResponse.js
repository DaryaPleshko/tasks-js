function buildResponse(response, code, message) {
  response.status(code).send(message);
}

module.exports = { buildResponse };
