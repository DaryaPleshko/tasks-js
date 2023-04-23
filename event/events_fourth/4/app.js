// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

const btn = document.querySelector('.btn'),
    inp = document.querySelector('.inp').value;

btn.addEventListener('click', () => {
    try {
        if (inp.length <= 0) throw new Error('Вы ничего не ввели');
        return alert(inp);
    } catch (error) {
        return alert(error.message);
    }
});