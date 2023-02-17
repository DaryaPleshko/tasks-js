// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
// этого массива

const inp = document.querySelector('.inp'),
    array = document.querySelector('.array'),
    btn = document.querySelector('.btn'),
    avg = document.querySelector('.avg');

let newArray = [];
btn.addEventListener('click', () => {
    try {
        if (inp.value.length === 0) throw new Error(`Некорректный ввод`);
        else {
            newArray.push(inp.value);
            inp.value = ``;
            array.innerHTML = newArray;

            let arrayAvg = newArray.reduce((sum, el) => sum + +el, 0);
            avg.innerHTML = arrayAvg / newArray.length;
        }
    } catch (error) {
        alert(error.message);
        inp.value = ``;
    }
})