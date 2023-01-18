// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, длина не менее 8 символов)

const checkPassword = (pwd) => {
    if (pwd.length <= 7) return ('Пароль должен содержать минимум 8 символов !'); 
    if (!/^[a-zA-Z0-9]+$/g.test(pwd)) return('Пароль не является надежным!');
    return ('Пароль является надежным!');;
}

console.log(checkPassword(`Dp2704pl`));