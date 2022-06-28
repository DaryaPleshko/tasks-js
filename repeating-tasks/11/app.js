// Дан массив [10, 20, 30, 50, 235, 3000]. Необъодимо проверить находятся ли внутри массива числа. Если да, то выведите на экран только те числа
// из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235. Если нет, то исключение


const arrayOfNum = [10, 20, 30, 50, 235, 3000];

const arrOfStrOrNum = (array) => {
    let countOfErrorStr = 0;
    for (let i = 0; i < array.length; i++) isNaN(array[i]) ? countOfErrorStr += 1 : null
    if (countOfErrorStr > 0) throw new Error('в массиве есть строки')
    return true;
};

const arrOfStr = (array) => {
    const arrStr = [];
    for (let i = 0; i < array.length; i++) arrStr.push(String(array[i]));
    return arrStr;
};

const sortOfNum = (array) => {
    try {
        if (arrOfStrOrNum(array)) {
            const arrStr = arrOfStr(array);
            const filterArr = arrStr.filter(el => el[0] === '1' || el[0] === '2' || el[0] === '5')
            if (!filterArr) throw new Error('в массиве нет чисел начинающихся с 1,2 или 5');
            return filterArr;
        }
    } catch (error) {
        return error;
    }
};

console.log(sortOfNum(arrayOfNum));
