// На странице контейнер из 5 инпутов. Необходимо по изменению кнопки
// получить значение соответствующего инпута и отобразить в alert

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('keydown', (event) => {
    if (event.keyCode === 13)  alert(event.target.value);
})
