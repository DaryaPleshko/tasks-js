//Вывести в строчку все вводимые значения через инпут

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

let inpValue = [];
btn.addEventListener('click', () => {
    const inp = document.querySelector('.inp');
    inpValue.push(inp.value)
    result.innerHTML = inpValue;
});