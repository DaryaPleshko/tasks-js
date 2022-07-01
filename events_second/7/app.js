//По нажатию на кнопку поменять местами значения инпутов.
// По умолчанию это «!!!» и «???», но пользователь может вводить свои значения

const btn = document.querySelector('.btn');
const inpFirst = document.querySelector('.inp-first');
const inpSecond = document.querySelector('.inp-second');

btn.addEventListener('click', () => {
    const inpRes = inpFirst.value;
    inpFirst.value = inpSecond.value;
    inpSecond.value = inpRes;
});