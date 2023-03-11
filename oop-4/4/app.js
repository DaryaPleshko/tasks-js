// Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
// Напишите класс Person с атрибутами данных для имени, фамилии. Затем
// напишите класс Customer, который является подклассом класса Person. Класс
// Customer должен иметь поле телефонного номера человека. Продемонстрируйте
// экземпляр класса Customer вызвав геттеры собственного класса и суперкласса

class Person {
    name;
    surname;
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
}

class Customer extends Person {
    phone;
    setPhone(phone) {
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
}  

const customer = new Customer();
customer.setName('Darya');
customer.setSurname('Pleshko');
customer.setPhone('+375247862776');
console.log(`${customer.getName()} ${customer.getSurname()}, ${customer.getPhone()}`);