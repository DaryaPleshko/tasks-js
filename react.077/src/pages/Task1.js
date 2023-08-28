// 1. На входе статичный массив чисел. Ваша задача каждое число массива возвести в
// квадрат и отобразить на странице 

function Task1() {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.map(el => el ** 2);
    return (
        <div>
            {newArray}
        </div>
    )
}

export default Task1;