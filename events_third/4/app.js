//Вы  вводите строку. Проверить является ли палиндром. (Естественно, проверки) 

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const strCheck = (inp) => {
    if (inp.length === 0) throw new Error('Пустое значение')
    if (!/^[a-zA-Zа-яА-Я]+$/g.test(inp)) throw new Error('Некорректное значение');
    return true;
}

btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp').value.trim().toLowerCase();
        if (strCheck(inp)) {
            if (inp.split('').reverse().join('') != inp) throw new Error('Слово не является палиндром');
            result.innerHTML = 'Слово является палиндромом';
        }
    } catch (error) {
        result.innerHTML = error.message;
    }
});