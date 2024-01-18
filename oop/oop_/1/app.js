// Реализуйте класс Singer, который будет иметь следующие свойства: name, surname. 
//Также класс должен иметь метод getАutograph (), который будет выводить “{name} {surname), с наилучшими пожеланиями”. 


class Singer {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getAutograph() {
        return `${this.name} ${this.surname}, с наилучшими пожеланиями`;
    }
}

const singer = new Singer(`Дарья`, `Плешко`);
console.log(singer.getAutograph());











// class Singer {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getАutograph = () => {
//         return `${this.name} ${this.surname}, с наилучшими пожеланиями `;
//     }
// }
// const singer = new Singer(`Дарья`, `Плешко`);
// console.log(singer.getАutograph());