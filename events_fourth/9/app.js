// У вас есть кнопка. После нажатия поменять background.

const btn = document.querySelector('.btn');

let flag = true;
btn.addEventListener('click', () => {
    if (flag) {
        btn.style = 'background-color:red';
        flag = false;
    } else {
        btn.style = 'background-color:purple';
        flag = true;
    }
})
