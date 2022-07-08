// Реализуйте класс Singer, который будет наследовать от класса Worker. 
//   Класс Worker состоит из: свойства name, свойства  surname, метода getFullName(), 
//   с помощью которого можно вывести одновременно имя и фамилию;  Класс Singer наследует name,
//    surname, также состоит из свойств years, birth, style. Также класс должен 
//    иметь метод getMoreInfo(), 
// который будет выводить информацию о певце: years, birth, style.


class Worker {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName = () => `${this.name} ${this.surname}`;

}

class Singer extends Worker {
    constructor(name, surname, year, birth, style) {
        super(name, surname)
        this.year = year;
        this.birth = birth;
        this.style = style;
    }

    getMoreInfo = () => `${this.year} ${this.birth} ${this.style}`;

}
const singer = new Singer(`Dasha`, `Pleshko`, 2004, `27.04.04`, `student`);
console.log(singer.getFullName()); 
console.log(singer.getMoreInfo()); 