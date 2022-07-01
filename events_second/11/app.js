//Вывести в строчку все вводимые значения через инпут. Добавить проверки, что поле для
// ввода не пустое(ориентироваться на 8 - 10 задачи).После каждго клика на кнопку
// очищать инпут.Добавить проверку, что значение инпута – исключительно буквы, допускаются
// пробелы. (Предполагается, что в инпут могут вводиться города и страны: Беларусь, Босния и
// Герцеговина, Сербия).Если результат не проходит под все наши условия, тто вывести сообщение 
// об ошибке КРАСНЫМ цветом

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const inp = document.querySelector('.inp');
let inpValue = [];

const checkOfInp = (inp) => {
    if (inp.value.length == 0) throw new Error('Вы не ввели ничего');
    if (!/^[а-яА-Яa-zA-Z'']+$/g.test(inp.value)) throw new Error('Это не город');
    return true;
}

btn.addEventListener('click', () => {
    try {
        if (checkOfInp(inp)) {
            result.textContent = '';
            inpValue.push(inp.value);
            for (let i = 0; i < inpValue.length; i++) {
                const p = document.createElement("p");
                p.className = `class-p${i}`;
                result.appendChild(p);
                document.querySelector(`.class-p${i}`).innerHTML = `${i+1}) ${inpValue[i]}`;
            }
            result.style = 'color: black';
            inp.value = '';
        }
    } catch (error) {
        result.innerHTML = error.message;
        result.style = 'color: red';
        inp.value = '';
    }
});