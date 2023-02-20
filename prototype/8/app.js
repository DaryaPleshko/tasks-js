// На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления

const numberSystem = (numInSecondSystem) => {
    try {
        const splitNum = numInSecondSystem.split('').reverse();
        let countStr = 0,
            numInTenthSystem = 0;
        for (let i = 0; i < splitNum.length; i++) {
            if (isNaN(splitNum[i])) countStr++;
            else numInTenthSystem += splitNum[i] * (2 ** i);
        }
        if (countStr > 0) throw new Error(`Некорректный ввод`);
        return numInTenthSystem;
    } catch (error) {
        return error.message;
    }
};
console.log(numberSystem(`010011`));