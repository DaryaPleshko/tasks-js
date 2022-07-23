// Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх


const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.input`).value;
        const result = document.querySelector(`.result`);
        if ((/^[0-9]{2}-[0-9]{2}-\d{4}$/g).test(inp)) result.innerHTML = `Задача выполнена !`;
        else throw new Error(`Некорректный ввод`);
    } catch (error) {
        alert(error.message);
    }
});