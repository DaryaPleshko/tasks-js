//Вычислите сумму массива целых чисел статичного массива используя рекурсию

const checkArray = (array) => {
    if (array.length === 0) return 0;
    else return array[0] + checkArray(array.slice(1));
}
console.log(checkArray([32, 54, 23, 75, 45]));