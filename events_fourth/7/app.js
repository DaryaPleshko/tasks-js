//Записать в результат удвоенное значение инпута. Добавить проверки 
const btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp').value;

        if (inp.length == 0 || isNaN(inp)) throw new Error(`Некорректный ввод`);
        return result.innerHTML = inp * 2;
    } catch (error) {
        return result.innerHTML = error.message;
    }
})