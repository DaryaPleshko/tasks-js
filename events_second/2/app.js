// Записать в результат удвоенное значение инпута

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const result = document.querySelector('.result');
    result.innerHTML = document.querySelector('.inp').value * 2;
});


