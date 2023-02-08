//Вы вводите строку. Проверить является ли это слово палиндром. Добавить проверки

const btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

const isValid = (inp) => {
    if (inp.length === 0) throw new Error(`Некорректный ввод`);
    return true;
}

btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp').value.toLowerCase();
        isValid(inp);
        const reverseInp = inp.split('').reverse().join('');
        if (reverseInp != inp) throw new Error(`Не палиндром`);
        result.innerHTML = `Палиндром`;
    } catch (error) {
        result.innerHTML = error.message;
    }
})