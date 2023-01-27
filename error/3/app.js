// Дан массив чисел внутри строки. Необходимо строку преобразовать в массив
// используя JSON.parse. Если же после того как вы спарсили данные у вас не
// массив, то бросить исключение. Добавить проверку на числа. Далее вывести
// только те числа, которые кратны 3

const json = JSON.parse(`[2, 3, 6, 4]`);

const checkArray = (json) => {
    try {
        if (!Array.isArray(json)) throw new Error(`Пришел не массив`);
        let countStr = 0;
        for (let el of json) (isNaN(el)) ? countStr++ : null;
        if (countStr > 0) throw new Error(`В массиве есть строки`);
        return true;
    } catch (error) {
        return error.message;
    }
}

const doArray = (json) => {
    if (checkArray(json)) {
        let newArray = [];
        for (let i = 0; i < json.length; i++) if (json[i] % 3 === 0) newArray.push(json[i]);
        return newArray;
    }
}

console.log(doArray(json));