// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
// границы кнопки сновка скрывать

const btn = document.querySelector('.btn'),
    result = document.querySelector('.result');

btn.addEventListener('mouseover', () => document.querySelector('.result').innerHTML = 'Hi');
btn.addEventListener('mouseout', () => document.querySelector('.result').innerHTML = '');