// Реализуйте Singer – производный класс, базовый – Worker.
// Класс Worker состоит из: свойств: name, surname в конструкторе; метода getInfo(),
// с помощью которого можно вывести одновременно имя и фамилию;
// Класс Singer наследует name, surname в конструкторе при помощи метода super и
// дополнительно принимает и дополняет конструктор свойствами: years, birth, style;
// класс включает метод getInfo(), который переопределяет метод базового класса и
// расширяет его, отображая в консоль информацию о певце: years, birth, style.
// Необходимо вызвать метод getInfo из 2 экземпляров worker, singer

class Worker {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getInfo() {
        console.log(`${this.name} ${this.surname}`);
    }
}
class Singer extends Worker {
    constructor(name, surname, years, birth, style) {
        super(name, surname);
        this.years = years;
        this.birth = birth;
        this.style = style;        
    }
    getInfo() {
        super.getInfo();
        console.log(`${this.years} ${this.birth} ${this.style}`);                 
    }
}

let singer = new Singer(`Darya`, `Pleshko`, 18, `27.04.2004`, `test`);       
singer.getInfo()