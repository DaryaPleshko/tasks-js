// Записать в результат удвоенное значение инпута. Результат записать на одной строке со словом ,,Результат,,. 
//Добавить проверку на положительное число

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const check = (inp) => {
    if (inp < 0) throw new Error('Вы ввели число меньше 0');
    return true;
}

btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp').value;
        if (check(inp)) result.innerHTML = inp * 2;
    } catch (error) {
        result.innerHTML = error.message;
    }

});


