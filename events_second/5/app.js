// У вас есть кнопка. После каждого нажатия менять ее цвет.

const btn = document.querySelector('.btn');
let flag = false;

btn.addEventListener('click', () => {
    if (flag) {
        btn.style = 'background-color:white';
        flag = false;
    } else {
        btn.style = 'background-color:red';
        flag = true;
    }
});


