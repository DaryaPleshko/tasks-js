//Есть список. Необъодимо отловить на какой из элементов нажал пользователь (target) 
const ul = document.querySelector('.ul');

ul.addEventListener('click', (event) => {
    document.querySelector('.result').innerHTML = event.target.textContent;
});