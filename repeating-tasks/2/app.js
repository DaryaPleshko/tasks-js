// У вас есть массив из строк [‘I’, ‘like, ‘to’, ‘learn’, ‘something’, ‘new’]. Преобразовать в строку ‘I like to learn something new’ 

const arr = ['i', 'like', 'to', 'learn', 'something', 'new'];
function fillingStrArray(arr) {
    return arr.join('');
}
console.log(fillingStrArray(arr));