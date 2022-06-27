//На входе число. Необходимо создать функцию, возвращающую факториал этого числа

const value = 5;
function chekValue(paramVal) {
    let factorial = 1;
    for (let i = 1; i <= paramVal; i++) {
        factorial *= i;
    }
    return factorial;
}
const rez = chekValue(value);
console.log(rez);
