// Реализуйте функцию searchBinary, которая принимает 2 параметра: значение и
// массив. Функция возвращает индекс, где значение встречается в массиве, если
// найдено. Если значение не найдено, возвращается сообщение об ошибке.

const searchBinary = (array, value) => {
    let startIndex = 0;
    let endIndex = array.length - 1;       

    for (let i = startIndex; i < endIndex; i++) {
        let midl = Math.floor((startIndex + endIndex) / 2);
        if (value === midl) {
            console.log(`Число найдено`);
            break;
        } else if (value > midl) {
            startIndex = midl;
            console.log(`число больше ${midl}`);
        } else if (value < midl) {
            endIndex = midl;
            console.log(`число меньше ${midl}`);
        }
    }
}
searchBinary([1, 2, 3, 4, 5], 3);