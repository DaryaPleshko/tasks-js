const buildResponse = (response, data, number) => response.status(number).send(data);

module.exports = { buildResponse };