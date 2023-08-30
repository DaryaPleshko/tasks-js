// 4. У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
// рандомно

function Task4() {
    const changeColor = (event) => {
        const array = ['red', 'white', 'blue'];
        event.target.style = `background-color: ${array[Math.floor(Math.random() * 3)]}`
    }
    return (
        <div>
            <button onClick={changeColor}>BTN</button>
        </div>
    )
}

export default Task4;