// Классы Employee и ProductionWorker.
// Напишите класс Employee (Сотрудник), который содержит:
// • имя сотрудника;
// • номер сотрудника.
// Затем напишите класс ProductionWorker (Рабочий), который является подклассом
// класса Employee.
// Класс ProductionWorker содержит:
// • номер смены (целое число, к примеру, 1, 2 или 3);
// • ставка почасовой оплаты труда.
// Напишите методы получатели и методы-модификаторы для каждого класса.
// После того как эти классы будут написаны, напишите программу, которая создает
// объект класса ProductionWorker и предлагает пользователю ввести данные по
// каждому атрибуту данных этого объекта. Сохраните данные в объекте и
// примените в этом объекте методы получатели, чтобы получить эти данные и
// вывести их на экран. 

class Employee {
    name;
    numberOfEmloyee;

    setName = (name) => this.name = name;
    setNumberOfEmloyee = (numberOfEmloyee) => this.numberOfEmloyee = numberOfEmloyee;

    getName = () => this.name;
    getnumberOfEmloyee = () => this.numberOfEmloyee;
}
class ProductionWorker extends Employee {
    shiftNumber;
    payment;

    setShiftNumber = (shiftNumber) => this.shiftNumber = shiftNumber;
    setPayment = (payment) => this.payment = payment;

    getShift = () => this.shiftNumber;
    getPayment = () => this.payment;
}
const productionWorker = new ProductionWorker();
productionWorker.setName('Darya');
productionWorker.setNumberOfEmloyee('+375298653455');
productionWorker.setShiftNumber(2);
productionWorker.setPayment(100);
console.log(productionWorker.getName(), productionWorker.getnumberOfEmloyee());
console.log(productionWorker.getShift(), productionWorker.getPayment());
