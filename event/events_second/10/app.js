//Вывести в строчку все вводимые значения через инпут. Добавить проверки, что поле для ввода не 
//пустое (ориентироваться на 8-9 задачи). После каждго клика на кнопку очищать инпут

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

let inpValue = [];

const checkOfInp = (inp) => {
    if (inp.value.length == 0) throw new Error('Вы ничего не ввели');
    return true;
}

btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp');
        if (checkOfInp(inp)) {
            inpValue.push(inp.value)
            result.innerHTML = inpValue;
            inp.value = '';
        }
    } catch (error) {
        result.innerHTML = error.message;
    }
});