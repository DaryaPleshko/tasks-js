// Middleware – cвязующее программное обеспечение. Прежде чем запрос попадет
// на сервер, запрос поступает в middleware, где находятся функции валидаторы.
// Необходимо реализовать функцию валидатор, которая обрабатывает 2 поля:
// почту, имя пользователя. Для проверки полей воспользуйтесь регулярными
// выражениями. Middleware-функция возвращает true, если оба условия
// отработали успешно и false в противном случае

const isValid = (email, name) => {
    try {
        if (!/^[a-z0-9_\-\.]+@[a-z]+\.[a-z]+$/g.test(email)) throw new Error(`Некорректный email`);
        if (!/^[A-Za-z]{2,} [A-Za-z]{2,}$/g.test(name)) throw new Error(`Некорректный user name`);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(isValid(`dashapleshko2004@mail.ru`, `Darya Pleshko`));