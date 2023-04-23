// После нажатия на кнопку «Разблокировать» мы можем изменять инпут, вводить свое значения. 
// После нажатия на заблокимровать мы 
// запрещаем данное действие тем самым выключая возможность редактирования значения инпута

const btnFirst = document.querySelector('.btn-first');
const btnSecond = document.querySelector('.btn-second');
const inp = document.querySelector('.inp');


btnFirst.addEventListener('click', () => {

    inp.disabled = true;
});
btnSecond.addEventListener('click', () => {

    inp.disabled =false;
});
