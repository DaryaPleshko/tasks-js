// Реализовать следующие классы Круг, Треугольник и Квадрат, которые
// наследуются от Figure. Каждый экземпляр класса должен содержать свойства
// Площадь и Имя. Вывести всю информацию о фигурах в консоль. Площадь должна
// рассчитываться по математическим формулам. Класс Figure содержит поля: pi =
// 3.14, r = radius, a = side, h = height, а также сеттеры для данных полей. Дочерние
// классы содержать геттеры на получение площади
class Figure {
    circleArea = (radius, pi) => {
        if (!/^[0-9]+$/g.test(radius)) throw new Error('Вы ввели строку');
        return (pi * (radius ** 2));
    }
    squareArea = (side) => {
        if (!/^[0-9]+$/g.test(side)) throw new Error('Вы ввели строку');
        return side ** 2;
    }
    triangleArea = (side, height) => {
        if (!/^[0-9]+$/g.test(side) || !/^[0-9]+$/g.test(height)) throw new Error('Вы ввели строку');
        return ((side * height) / 2);
    }
}
class Circle extends Figure {
    name;      
    radius;
    pi;

    setInfoCircle = (name, radius, pi) => {
        this.name = name;
        this.radius = radius;
        this.pi = pi;
    }
    getInfoCircle = () => {
        try {
            const countingArea = this.circleArea(this.radius, this.pi);
            return `Фигура ${this.name} с площадью = ${countingArea};`
        } catch (error) {
            return error.message;
        }
    }
}
class Triangle extends Figure {
    name;
    side;
    height;

    setInfoTriangle = (name, side, height) => {
        this.name = name;
        this.side = side;
        this.height = height;
    }
    getInfoTriangle = () => {
        try {
            const countingArea = this.triangleArea(this.side, this.height);
            return `Фигура ${this.name} с площадью = ${countingArea};`
        } catch (error) {
            return error.message;
        }
    }
}
class Square extends Figure {
    name;
    side; 

    setInfoSquare = (name, side) => {
        this.name = name;
        this.side = side;
    }
    getInfoSquare = () => {
        try {
            const countingArea = this.squareArea(this.side);
            return `Фигура ${this.name} с площадью = ${countingArea};`
        } catch (error) {
            return error.message;
        }
    }
}

const circle = new Circle();
const triangle = new Triangle();
const square = new Square();

circle.setInfoCircle('Кружок', 5, 3.14);
triangle.setInfoTriangle('Тругольничек', 5, 5);
square.setInfoSquare('Квадратик', 5);
console.log(circle.getInfoCircle());
console.log(triangle.getInfoTriangle());
console.log(square.getInfoSquare());
