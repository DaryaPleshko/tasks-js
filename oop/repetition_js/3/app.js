// Реализуйте класс HTML. Класс содержит методы bindOptionPlus, bindOptionMinus,
// содержащие по 1 обработчику события в каждом из методов. HTML разметка
// содержит: div с первоначальным значением 0 (счетчик), кнопку button с текстом +1,
// кнопку button с текстом -1. Задача:
// • По клику с текстом на кнопку +1 необходимо добавить в счетчик +1.
// • По клику с текстом на кнопку -1 необходимо отнять из счетчика -1. 

class HTML {
    bindOptionPlus = () => {
        const result = document.querySelector('.result');
        document.querySelector('.plus').addEventListener('click', () => {
            try {
                result.textContent = +result.textContent + 1;
            } catch (error) {
                alert(error.message);
            }
        });
    }
    bindOptionMinus = () => {
        const result = document.querySelector('.result');
        document.querySelector('.minus').addEventListener('click', () => {
            try {
                result.textContent = +result.textContent - 1;
            } catch (error) {
                alert(error.message);
            }
        });
    }
}
const html = new HTML();
html.bindOptionPlus();
html.bindOptionMinus();