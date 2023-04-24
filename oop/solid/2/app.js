// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на почту. Вывести true, если провека успешна

class DomHtml {
    constructor() {
        this.generateEvent()
    }

    generateEvent = () => {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const inp = document.querySelector('.inp').value;
            this.middleware(inp);
        });
    }

    middleware = (inp) => {
        try {
            const result = document.querySelector('.result');
            if (!/^[a-z0-9_\-\.]+@[a-z]+\.[a-z]+$/g.test(inp)) throw new Error(`Некорректный ввод`);
            result.innerHTML = true;
        } catch (error) {
            alert(error.message);
        }
    }

}
const domHtml = new DomHtml();