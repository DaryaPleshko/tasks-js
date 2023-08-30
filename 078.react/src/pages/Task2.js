// 2. По событию изменения input отображать в консоль каждое вводимое значение

function Task2() {
    const checkChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <div>
            <input onChange={checkChange} />
        </div>
    )
}

export default Task2;