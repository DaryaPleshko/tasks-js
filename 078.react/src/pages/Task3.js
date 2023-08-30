// 3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
// палиндромом 

function Task3() {
    const isPal = (event) => {
        if (event.key === 'Enter') {
            alert(event.target.value === event.target.value.split('').reverse().join('') ? 'палиндромом' : 'не палиндромом');
        }
    }

    return (
        <div>
            <input onKeyDown={isPal} />
        </div>
    )
}

export default Task3;