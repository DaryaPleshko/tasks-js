//У вас есть какае-то значение. Необходимо обработать это значение. Если это число и оно не является четным, то бросить исключение 

const anyValue = 75;
const checkIsNaNOfValue = (value) => {
    if (isNaN(value)) throw new Error(`Это строка`);
    return anyValue;
};
const checkNumOfValue = (value) => {
    try {
        let number = checkIsNaNOfValue(value);
        if (number % 2 === 0) return value;
        else throw new Error(`нечет`);
    } catch (err) {
        return err;
    }
}
console.log(checkNumOfValue(anyValue));