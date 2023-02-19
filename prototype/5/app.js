// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть
// символов 1 строки есть в другой.
// 'rkqodlw', 'world‘ – true
// 'kacvtas', 'steak' – false

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    try {
        const firstInp = document.querySelector('.first-inp').value.split(''),
            secondInp = document.querySelector('.second-inp').value.split(''),
            result = document.querySelector('result');
        let newStr = ``;
        for (let i = 0; i < secondInp.length; i++) if (!newStr.includes(firstInp[i])) newStr += firstInp[i];
        if (newStr.length != secondInp.length) throw new Error(false);
        result.innerHTML = true;
    } catch (error) {
        alert(error.message);
    }
});