// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение. 

const isValid = (array) => {
    try {
        let countStr = 0;
        for (let el of array) (isNaN(el)) ? countStr++ : null;
        if (countStr > 0) throw new Error(`В массиве есть строка`);
        return true;
    } catch (error) {
        return error.message;
    }
}

console.log(isValid([4, 23, `fds`]));