const validationPost = (req, res, next) => {
    if (!req.body.hasOwnProperty("name") && !req.body.hasOwnProperty("surname")) throw new Error("Неккоректный ввод")
    next()
}

module.exports = { validationPost }