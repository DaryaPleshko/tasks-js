// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const btnFirst = document.querySelector('.btn-first'),
    btnSecond = document.querySelector('.btn-second'),
    inp = document.querySelector('.inp');

btnFirst.addEventListener('click', () => inp.disabled = true);
btnSecond.addEventListener('click', () => inp.disabled = false);
