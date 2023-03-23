// Реализуйте класс Singer, который будет наследовать от класса Worker. Класс
// Worker состоит из: свойства Name, свойства surname, метода getFullName(), с
// помощью которого можно вывести одновременно имя и фамилию; Класс Singer
// состоит из свойств years, birth, style и метода getMoreInfo(), который выводит
// информацию о певце: name, surname years, birth, style. Необходимо вызвать
// методы getFullName , getMoreInfo

class Worker {
    name;
    surname;

    setFullName = (name, surname) => {
        this.name = name;
        this.surname = surname;
    }
    getFullName = () => `Full Name - ${this.name} ${this.surname}`;
}

class Singer extends Worker {
    year;
    birth;
    style;

    setMoreInfo = (year, birth, style) => {
        this.year = year;
        this.birth = birth;
        this.style = style;
    }
    getMoreInfo = () => `More info: year = ${this.year}, birth = ${this.birth}, style = ${this.style}`;
}
const singer = new Singer();
singer.setFullName('Darya', 'Pleshko');
singer.setMoreInfo(18, '27.05.2000', 'test');
console.log(singer.getFullName());
console.log(singer.getMoreInfo()); 