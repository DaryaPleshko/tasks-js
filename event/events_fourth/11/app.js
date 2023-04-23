//По нажатию на кнопку поменять местами значения 2 инпутов. 

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let firstInp = document.querySelector('.first-inp'),
        secondInp = document.querySelector('.second-inp');

    let firstInpVal = firstInp.value
    firstInp.value = secondInp.value;
    secondInp.value = firstInpValX;
})