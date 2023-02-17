// По условию задачи даны инпут и кнопка. Напишите функцию, которая
// преобразует любое предложение инпута в предложение VAPORWAVE.
// предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет
// 2 пробела между каждой буквой (или специальным символом)
// Why isn't my code working? – W H Y I S N ' T M Y C O D E W O R K I N G ?

const inp = document.querySelector('.inp'),
    btn = document.querySelector('.btn'),
    vaporware = document.querySelector('.vaporware');

btn.addEventListener('click', () => {
    try {
        if (inp.value.trim() === ``) throw new Error(`Некорректный ввод`);
            let valuesVaporware = ``;
            for (let i = 0; i < inp.value.length; i++) {
                valuesVaporware += inp.value[i].toUpperCase() + `  `;
            }
            vaporware.innerHTML = valuesVaporware;
    } catch (error) {
        alert(error.message);
        inp.value = ``;
    }
})