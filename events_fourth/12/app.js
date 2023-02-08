// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пусто

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const checkOfInp = (inp) => {
    if (inp.value.length === 0) throw new Error('Вы ничего не ввели');
    return true;
}

let inpValue = [];
btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp');
        checkOfInp(inp);
            inpValue.push(inp.value)
            result.innerHTML = inpValue;
            inp.value = '';
    } catch (error) {
        result.innerHTML = error.message;
    }
});