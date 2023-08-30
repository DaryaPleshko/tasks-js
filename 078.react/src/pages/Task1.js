// 1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
// реализовать метод валидации. Написать регулярное выражение: пароль от 8
// символов, содержит числа, буквы, !@#$%^&*+= 

function Task1() {
    const pwd1 = '123%^#!^hjA'
    const pwd2 = '123%^#!^hjA'

    function checkPwd() {
        try {
            if (pwd1.length < 8 || pwd2.length < 8) throw new Error('pwd меньше 8 символов');
            if (pwd1 !== pwd2) throw new Error('pwd не совпадают');
            if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/gm.test(pwd1) || !/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/gm.test(pwd2)) throw new Error('pwd не валидный');

            alert('ВВЕДЕН ВЕРНЫЙ ПАОЛЬ');

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div>
            <button onClick={checkPwd}>BTN</button>
        </div>
    )
}

export default Task1;