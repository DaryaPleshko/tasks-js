// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо создать объект, где каждый
// ключ – индекс элемента массива, а значение – текущее итерируемое значение
// массива
// [11, 2, 13] – {
// 0: 11,
// 1: 2,
// 2: 13
// }

const inp = document.querySelector('.inp'),
    array = document.querySelector('.array'),
    btn = document.querySelector('.btn'),
    obj = document.querySelector('.obj');

let arrayValues = [];
let objValues = {};
btn.addEventListener('click', () => {
    try {
        if (inp.value.length === 0) throw new Error(`Некорректный ввод`);
        else {
            arrayValues.push(inp.value);
            inp.value = ``;
            array.innerHTML = `[${arrayValues}]`;
            for (let i = 0; i < arrayValues.length; i++)  objValues[i] = arrayValues[i];
            obj.innerHTML = JSON.stringify(objValues);
        };
    } catch (error) {
        alert(error.message);
        inp.value = ``;
    }
})