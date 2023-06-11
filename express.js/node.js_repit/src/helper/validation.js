const isValidUser = (request, response, next) => {
    const { name, surname, email, pwd } = request.body;
    if (!name) throw new Error(`Value is empty`);
    if (!isNaN(name)) throw new Error(`Невалидное число`);
    if (!surname) throw new Error(`Value is empty`);
    if (!isNaN(surname)) throw new Error(`Невалидное число`);
    if (!email) throw new Error(`Value is empty`);
    if (!pwd) throw new Error(`Value is empty`);
    next();
}

module.exports = { isValidUser }