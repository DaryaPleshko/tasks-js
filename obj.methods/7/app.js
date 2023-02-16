// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 = 1^0+2^1+3^2+4^3+5^4

const exponentiationNum = (num) => {
    const splitNum = num.split('')
    let newNum = 0;
    for (let i = 0; i < splitNum.length; i++)  newNum += splitNum[i] ** i;
    return newNum;
}
console.log(exponentiationNum(`12345`));