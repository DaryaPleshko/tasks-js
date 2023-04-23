//. Работа с замыканием. Реализуйте функцию, которая будет считать количество
//своих вызовов

function func() {
    let value = 0;
    return () => {
        value += 1;
        console.log(value);
    }
}

const zamikanie = func();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
