// По двойному клику на кнопку вывести alert с сообщением «Hi» и изменить цвет кнопки

const btn = document.querySelector('.btn');

btn.addEventListener('dblclick', () => {
    btn.style = 'background-color:red';
    alert('Hi');
});