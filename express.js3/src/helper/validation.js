const validData = (req, res, next) => {
    if (!req.body.hasOwnProperty("user_id") && !req.body.hasOwnProperty("img")) throw new Error('Не валидный json');
    next()
}

const validEmail = (req, res, next) => {
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(req.body.email)) throw new Error('Не корректный ввод');
    next()
}
module.exports = { validData, validEmail }