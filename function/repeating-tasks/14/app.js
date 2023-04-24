//На входе у вас объект, которые вы придумываете сами. Необходимо все числовые значения удвоить на выходе 

let object = {
    surname: `Pleshko`,
    name: `Dasha`,
    age: 18,
    city: `Minsk`,
    course: 1,
};
const doublingNumOfObj = (obj) => {
    let newArr = [];
    for (let key in obj) (!isNaN(obj[key])) ? newArr.push(obj[key] * 2) : null;
    return newArr;
}
console.log(doublingNumOfObj(object));