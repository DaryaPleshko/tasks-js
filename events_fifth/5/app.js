// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом 

const btn = document.querySelector('.btn'),
    result = document.querySelector('.result'),
    inp = document.querySelector('.inp');

const isValid = (inp) => {
    if (inp.length === 0) throw new Error(`Некорректный ввод`);
    return true;
}

let array = [];
btn.addEventListener('click', () => {
    try {
        isValid(inp.value);
        array.push(inp.value);
        inp.value = '';
        result.innerHTML = array;
        result.style = 'color: black';
    } catch (error) {
        result.innerHTML = error.message;
        result.style = 'color: red';
        inp.value = '';
    }
})