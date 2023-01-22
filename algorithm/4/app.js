//Вычислите сумму массива целых чисел статичного массива используя рекурсию

const array = [1, 2, 3, 4, 5, 6, 7];

function sumArray(array) {
    if (array.length === 0) return 0;
    const lastItem = array.pop();
    return sumArray(array) + lastItem;
}

console.log(sumArray(array));