// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. HTML разметка содержит кнопку button с начальным значением 0. Задача:
// • По клику на кнопку каждый раз добавлять +1 в текст кнопки. (Если первоначальный
// текст кнопки – 0, то после пятого, например, клика значение input – 5)

class HTML {
    bindOption = () => {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            try {
                btn.textContent = +btn.textContent + 1;
            } catch (error) {
                alert(error.message);
            }
        });
    }
}

const html = new HTML();
html.bindOption();