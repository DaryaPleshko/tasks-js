// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

const inp = document.querySelector('.inp'),
    concatStr = document.querySelector('.concat-str'),
    btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    try {
        if (inp.value.trim() === ``) throw new Error(`Некорректный ввод`);
        const splitStr = inp.value.split(' ');
        let valuesCamelCase = ``;
        for (let i = 0; i < splitStr.length; i++)  valuesCamelCase += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
        concatStr.innerHTML = valuesCamelCase;
        inp.value = ``;
    } catch (error) {
        alert(error.message);
        inp.value = ``;
    }
})