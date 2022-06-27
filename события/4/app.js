// Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут.
// По клику на кнопку вызвать alert и отобразить сообщение из значения инпута. Проверки на ввод. Обработать ошибки

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    try {
        const inp = document.querySelector('.inp').value;
        if (inp.length > 0) {
            alert(inp);
        } else throw new Error('Вы ничего не ввели');
    } catch (error) {
        alert(error.message);
    }
});
