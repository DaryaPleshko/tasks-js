// Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя
// рекурсию

const n = 7;

const fibonachi = (n) => {
    if (n === 0 || n === 1) return n;
    return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(n - 1));