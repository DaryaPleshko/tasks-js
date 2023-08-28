// 2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
// отобразить на странице в виде h1

function Task2() {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.map(el => <h1>{Math.sqrt(el)}</h1> )
    return (
        <div>
            {newArray}
        </div>
    )
}
export default Task2;