// 5. На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
// случае числа четность и нечетность текущего значения в параграфе, в случае
// строки отобразить саму строку в параграфе

function Task5() {
    const array = [1, 'ghjn', 12];
    const newArray = array.map(elem => {
        return (isNaN(elem)) ? <p>{elem}</p> : (elem % 2 === 0) ? <p>четн</p> : <p>нечетн</p>
    })

    return (
        <div>
            {newArray}
        </div>
    )
}

export default Task5;