// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => document.querySelector('.inp').value = '!!!');