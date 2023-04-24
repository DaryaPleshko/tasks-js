// Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
// кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
// происходит проверка на uuid, введенный в input. Вывести true, если провека
// успешна. 

class DomHtml {
    constructor() {
        this.middleware();
    }

    middleware = () => {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            try {
                const inp = document.querySelector('.inp').value;
                if (!/^[a-z0-9]{8}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{4}\-[a-z0-9]{12}$/g.test(inp)) throw new Error(`Некорректный ввод`);
                alert(true);
            } catch (error) {
                alert(error.message);
            }
        });
    }
}
const doHtml = new DomHtml();