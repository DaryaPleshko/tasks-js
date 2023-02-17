// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
// по нажатию на кнопку формирует массив строк. Необходимо вывести: полный
// массив из всех элементов, а также массив из уникальных значений

const inp = document.querySelector('.inp'),
    array = document.querySelector('.array'),
    btn = document.querySelector('.btn'),
    uniq = document.querySelector('.uniq');

let newArrayStr = [],
    uniqArr = [];
btn.addEventListener('click', () => {
    try {
        if (inp.value.length === 0) throw new Error(`Некорректный ввод`);
        if (!isNaN(inp.value)) throw new Error(`Некорректный ввод`);
        else {
            newArrayStr.push(inp.value);
            inp.value = ``;
            array.innerHTML = newArrayStr;
            for (let i = 0; i < newArrayStr.length; i++) {
                if (!uniqArr.includes(newArrayStr[i])) uniqArr.push(newArrayStr[i]);
            }
            uniq.innerHTML = uniqArr;
        }
    } catch (error) {
        alert(error.message);
        inp.value = ``;
    }
})