// Вы вводите 2 слова. Проверить полностью на анаграммы    

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const checkValueOfInp = (inpFirst, inpSecond) => {
    if (inpFirst.length === 0 || inpSecond.length === 0) throw new Error('Пустое значение')
    if (!/^[a-zA-Zа-яА-Я]+$/g.test(inpFirst) || !/^[a-zA-Zа-яА-Я]+$/g.test(inpSecond)) throw new Error('Некорректное значение');
    return true;
}

btn.addEventListener('click', () => {
    try {
        const inpFirst = document.querySelector('.inp-first').value.trim().toLowerCase();
        const inpSecond = document.querySelector('.inp-second').value.trim().toLowerCase();
        if (checkValueOfInp(inpFirst, inpSecond)) {
            if (inpFirst.split('').sort().join('') != inpSecond.split('').sort().join('')) throw new Error('Это не анограмма');
            result.innerHTML = 'Это анограмма';
        }
    } catch (error) {
        result.innerHTML = error.message;
    }
});