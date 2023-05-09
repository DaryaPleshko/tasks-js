const isValidUserData = (request, response, next) => {
    const { name, surname, email, pwd } = request.body;

    if (!name) throw new Error(`You didn't pass the name`);
    if (!isNaN(name)) throw new Error(`Name must be a string data type`);

    if (!surname) throw new Error(`You didn't pass your last surname`);
    if (!isNaN(surname)) throw new Error('Surname must be a string data type');

    if (!email) throw new Error(`You didn't send email`);
    if (!/^[a-zA-Z0-9\.]+@[a-z]{1,6}\.[a-z]{1,6}/gm.test(email)) throw new Error(`This is not email`);

    if (!pwd) throw new Error(`You didn't pass the pwd`);
    if (pwd.length < 9) throw new Error(`Password less than 9 characters`);

    next();           
};

const isValidUserId = (request, response, next) => {                  
    const { id } = request.params;          
    if (!id) throw new Error(`You didn't pass id`);
    if (isNaN(id)) throw new Error(`Id must be a number`);

    next();
};

module.exports = { isValidUserData, isValidUserId };