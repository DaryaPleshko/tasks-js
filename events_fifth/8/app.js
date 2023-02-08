// Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу. 

const btn = document.querySelector('.btn');
const tr = document.querySelector('tr');

const isValid = (inp) => {
    if (inp.value.length == 0) throw new Error('Вы не ввели ничего');
    return true;
}

btn.addEventListener('click', () => {
    try {
        isValid(inp);


                let td = document.createElement("td");
                tr.appendChild(td);
                document.querySelector(`.class-p${i}`).innerHTML = `${i+1}) ${inpValue[i]}`;



            inp.value = '';
    } catch (error) {
        result.innerHTML = error.message;
        inp.value = '';
    }
});