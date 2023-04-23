//Напишите функцию, генерирующую надежный пароль. (Math.random)

const createPwd = () => {
    let pwd = ``;
    for (let i = 0; i < 10; i++) {
        let num = Math.ceil(Math.random() * 9);
        pwd += num;
    }
    return pwd;
}

console.log(createPwd());