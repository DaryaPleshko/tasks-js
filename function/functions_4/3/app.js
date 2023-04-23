//Напишите функцию, которая принимает почту и возвращает объект, вида
// {
//     email,
//     active: true / false
//     }
//     true, если почта содержит @, .com / .ru. False в противном случае

const checkEmail = (email) => {
    if (/^[a-z0-9_\.]+@[a-z]+\.(com|ru)+$/g.test(email)) {
        return ({
            email: email, 
            active: true
        });
    } else return ({
        email: email, 
        active: false
    });
}

console.log(checkEmail(`dasha.pleshko2004@mail.ru`))