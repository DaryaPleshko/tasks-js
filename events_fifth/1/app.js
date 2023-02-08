// На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const list = document.querySelector('.list');
list.addEventListener('click', (event) => document.querySelector('.result').innerHTML = event.target.textContent);