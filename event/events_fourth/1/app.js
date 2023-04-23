// Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее
// вывести alert с сообщением

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => alert('Вы нажали на кнопку'));