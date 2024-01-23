// Реализуйте Validation – производный класс, базовый – StringValue. 
// Класс StringValue состоит из: свойствa value в конструкторе;Класс Validation наследует
// value в конструкторе при помощи метода super и дополнительно принимает и дополняет 
// конструктор свойством: confirmValue; класс Validation включает метод checkValue(), 
// который проверяет, что передаваемое значение value в конструктор – строка и состоит из букв.
// Также добавить проверку на равенство value и confirmValueНеобходимо вызвать метод getValue
// из 2 экземпляров validation, stringValue

class StringValue{
constructor(value){
    this.value = value;
}
getValue(){ 
    return this.value;
}
}
class Validation extends StringValue{
constructor(value, confirmValue){
    super(value);
    this.confirmValue = confirmValue;
}
checkValue(){
if(!isNaN(this.value)) throw new Error('ошибка типов данных');
if(this.value !=this.confirmValue ) throw new Error('данные не совпадают');
return true;
}
getValue(){
    try{
        this.checkValue();
        return `${this.value} ${this.confirmValue}`;
    }catch(error){
        return error.message;
    }
}
}

const stringValue = new StringValue('kikokko');
const validation = new Validation('kikokko','kikokko');
console.log(stringValue.getValue());
console.log(validation.getValue());









// class StringValue {
//     constructor(value) {
//         this.value = value;
//     }
// }
// class Validation extends StringValue {
//     constructor(value, confirmValue) {
//         super(value);
//         this.confirmValue = confirmValue;
//     }
    
//     getValue() {
//         try {
//             if (!isNaN(this.value)) throw new Error(`It is a number`)
//             if (this.value != this.confirmValue) throw new Error(`Passwords don't match`);
//             return true;
//         } catch (error) {
//             return error.message;
//         }
//     }
// }
// const validation = new Validation('daryppl','daryapl');
// console.log(validation.getValue());