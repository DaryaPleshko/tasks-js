// 4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
// массива, а также картинку. Каждая итерация будет возвращать
// <div>
// <p>el</p>
// <img/>
// </div>
import cross from '../assets/cross.png'

function Task4() {
    const array = ['js', 'java', 'c++'];
    const newArray = array.map(elem =>
        <div>
            <p>{elem}</p>
            <img src={cross} />
        </div>);

    return (
        <div>
            {newArray}
        </div>
    )
}
export default Task4;