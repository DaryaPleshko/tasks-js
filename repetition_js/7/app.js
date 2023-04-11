//Посчитать количество гласных и согласных в строке

const check = (str) => {
    const splitStr = str.split('');
    let sogl = 0,
        glas = 0;
    for (let i = 0; i < splitStr.length; i++) (splitStr[i] === 'e' || splitStr[i] === 'a' || splitStr[i] === 'i' || splitStr[i] === 'o' || splitStr[i] === 'u' || splitStr[i] === 'y') ? glas++ : sogl++;
    return `гласных - ${glas}, согласных - ${sogl}`;
}

console.log(check(`hello world`));