// Реализуйте класс HTML. Класс содержит метод bindOption содержащий обработчик
// события. Задача:
// • По клику на кнопку необходимо получить значение input и отобразить в пустой div
// (в созданной html разметке) посредством InnerHTML.
// • Добавить стили для отображения текста input: например, изменить цвет букв.
// • Добавить проверки на получение значения input

class HTML {
    bindOption = () => {
        const inp = document.querySelector('.inp'),
            result = document.querySelector('.result');
        document.querySelector('.btn').addEventListener('click', () => {
            try {
                if (inp.value.trim() === '') throw new Error('value is empty');
                result.innerHTML = inp.value;
                inp.value = '';
                result.style = `color: purple`;
            } catch (error) {
                alert(error.message);
            }
        });
    }
}

const html = new HTML();
html.bindOption();