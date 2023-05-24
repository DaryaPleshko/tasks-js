const isValidUserId = (request, response, next) => {
    const { id } = request.params;
    if (isNaN(id)) throw new Error(`ID isn't a number`);
    if (id <= 0) throw new Error(`ID is a negative number`);
    next();
}

const isValidUserBody = (request, response, next) => {
    const { name, surname, birth, city, age } = request.body;
    if (!name) throw new Error('name is empty');
    if (!surname) throw new Error('surname is empty');
    if (!birth) throw new Error('birth is empty');
    if (!city) throw new Error('city is empty');
    if (!age) throw new Error('age is empty');
    next();
}

module.exports = { isValidUserId, isValidUserBody };