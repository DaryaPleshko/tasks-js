//Реализуйте функцию, демонстрирующую работу бинарного поиска

const searchBinary = (num) => {
    let startIndex = 0,
        endIndex = 100;

    for (let i = startIndex; i < endIndex; i++) {
        let midl = Math.floor((startIndex + endIndex) / 2);
        if (num === midl) {
            return `Число найдено ${midl}`;
        } else if (num > midl) {
            startIndex = midl;
            console.log(`число больше ${midl}`);
        } else if (num < midl) {
            endIndex = midl;
            console.log(`число меньше ${midl}`);
        }
    }
}
console.log(searchBinary(Math.round(Math.random() * 100)));