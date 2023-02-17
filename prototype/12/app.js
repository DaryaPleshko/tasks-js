// Реализуйте функцию, которая будет считать количество своих вызовов

function funcZamikanie() {
    let value = 0;
    return () => console.log(value += 1);
}

const zamikanie = funcZamikanie();
zamikanie();
zamikanie();
zamikanie();
zamikanie();
