// Необходимо отобразить кнопку с надписью «Нажми на меня» и инпут с
// плейсхолдером по-умолчанию «+375 хх ххх хх хх». По клику на кнопку заменить значение инпута на «+375 29 155 91 55»

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => document.querySelector('.inp').value = '+375291559155');