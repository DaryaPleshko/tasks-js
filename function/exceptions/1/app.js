// У вас есть какае-то значение. Необходимо обработать это значение. Если это число, то бросить исключение

const value = 4;
const checkValue = (str) => {
    try {
        if (isNaN(str)) return str;
        else throw new Error(`Это число`);
    } catch (err) {
        return err;
    }
}
console.log(checkValue(value));