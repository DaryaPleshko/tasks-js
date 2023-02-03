// Реализуйте функцию, которая принимает любое неотрицательное целое число и
// возвращает его числа в порядке убывания. По сути, переставьте цифры, чтобы
// получить максимально возможное число. Добавить проверки
// 42145 –> 54421
// 145263 –> 654321
// 123456789 –> 987654321

const check = (num) => {
    if (num < 0) throw new Error(`Введите целое число`);
    return true;
} 

const decreasing = (num) => {
    try {
        check(num);
        const sortNum = num.split('').sort().reverse().join('');
        return sortNum;
    } catch (error) {
        return error.message;
    }
}
console.log(decreasing(`145263`));