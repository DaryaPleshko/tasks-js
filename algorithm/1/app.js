//На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

class PwdSort {
    constructor(pwd) {
        this.pwd = pwd;
    }
    checkPwd() {
        try {
            const filterRegUp = this.pwd.split('').some(el => el.toUpperCase());
            const filterRegLow = this.pwd.split('').some(el => el.toLowerCase());
            const filterNum = this.pwd.split('').some(el => !isNaN(el));
            if (!filterRegUp || !filterRegLow || !filterNum || !this.pwd.length || !this.pwd.includes('_')) throw new Error('false')
            return true;
        } catch (error) {
            return error.message;
        }
    }
}
const pwdSort = new PwdSort('W34er_Er');
console.log(pwdSort.checkPwd());













// function checkFunc(pwd) {
//     let countNum = 0,
//         upperW = 0,
//         lowerW = 0;

//     if (pwd.length < 8) return `Некорректный ввод! Введите больше символов!`;
//     for (let el of pwd) {
//         if (!isNaN(el)) countNum++;
//         if (el === el.toUpperCase() && isNaN(el)) upperW++;
//         if (el === el.toLowerCase() && isNaN(el)) lowerW++;
//     }
//     if (countNum === 0) return `Некорректный ввод! Пароль не содержит чисел`;
//     if (upperW === 0) return `Некорректный ввод! Пароль не содержит больших букв`;
//     if (lowerW === 0) return `Некорректный ввод! Пароль не содержит маленьких букв`;
//     if (pwd.length - (countNum + upperW + lowerW) === 0)return `Некорректный ввод! Пароль не содержит cимволов`;
//         return true;
// }

// console.log(checkFunc(`Sp46okisd_`));