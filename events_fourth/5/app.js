// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия

const btn = document.querySelector('.btn'),
    rez = document.querySelector('.rez');

const checkInput = (inp) => {
    if (inp < 0) throw new Error('Вы не ввели число > 0');
    return true;
}

btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp').value;
        checkInput(inp)
        let newArray = [0, 1];
        for (let i = 2; i < inp; i++) newArray.push(newArray[i - 1] + newArray[i - 2]);
        rez.innerHTML = newArray;
    } catch (error) {
        rez.innerHTML = error.message;
    }
});
