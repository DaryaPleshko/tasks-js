//Ряд Фибоначчи. Добавить проверки по вашей логике (как вы считаете какие проверки здесь необходимы?)

const numOfArray = +prompt();
const checkOfNum = (num) => {
    if (isNaN(num)) throw new Error('вы ввели строку');
    return true;
};
const fibonachi = (num) => {
    if (checkOfNum(num)) {
        let newArrWithFibonachi = [0, 1];
        for (let i = 2; i < num; i++) newArrWithFibonachi.push(newArrWithFibonachi[i - 1] + newArrWithFibonachi[i - 2]);
        return newArrWithFibonachi;
    }
};
console.log(fibonachi(numOfArray));