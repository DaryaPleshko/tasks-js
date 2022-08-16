const btn = document.querySelector('.btn'),
    fib = document.querySelector('.fib');

class Feature {
    fibRecursiya = (fibNum) => {
        return (fibNum <= 1) ? fibNum : this.fibRecursiya(fibNum - 1) + this.fibRecursiya(fibNum - 2);
    }
}

btn.addEventListener('click', () => {
    const fibNum = document.querySelector('input').value;
    const feature = new Feature();
    fib.innerHTML = feature.fibRecursiya(fibNum - 1);
})











// fibonahci = (fibNum) => {
    //     let outArr = [0, 1];
    //     let value = 0;
    //     for (let i = 2; i < fibNum; i++) {
    //         value = outArr[i - 1] + outArr[i - 2];
    //         outArr.push(value);
    //     }
    //     fib.innerHTML = outArr[fibNum - 1]
    // }