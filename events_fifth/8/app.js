// Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу. 

const btn = document.querySelector('.btn'),
    tbody = document.querySelector('tbody'),
    inp = document.querySelector('.inp');


const isValid = (inp) => {
    if (inp.value.length === 0) throw new Error('Вы ничего не ввели');
    return true;
}

let inpValue = [];
btn.addEventListener('click', () => {
    try {
        isValid(inp);
        inpValue.push(inp.value);
        for (let i = 0; i < inpValue.length; i++) {
            let table = document.createElement("table");
            table.className = `class-td${i}`;
            tbody.appendChild(table);
            document.querySelector(`.class-td${i}`).innerHTML = inpValue[i];
        }
        inp.value = '';
    } catch (error) {
        alert(error.message);
        inp.value = '';
    }
});