//На вход подается объект. Необходимо посчитать количество пар (ключ: значение) где значение число и вывести их количество  

let object = {
    surname: `Pleshko`,
    name: `Dasha`,
    age: 18,
    city: `Minsk`,
    bio: `stydent`,
};
const checkForTheNumOfPairs = (object) => {
    let numOfPairs = 0;
    for (let key in object) if (key) numOfPairs += 1;
    return numOfPairs;
};
console.log(checkForTheNumOfPairs(object));
