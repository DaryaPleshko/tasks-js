// Классы Person и Customer. Напишите класс Person с атрибутами данных для
// имени, адреса и телефонного номера человека. Затем напишите класс Customer
// (Клиент), который является подклассом класса Person. Класс Customer должен
// иметь поле для номера клиента и атрибут булевых данных,
// указывающий, хочет ли клиент быть в списке рассылки или нет.
// Продемонстрируйте экземпляр класса Customer в простой программе

class Person {
    name;
    address;
    phone;

    setName = (name) => this.name = name;
    setAddress = (address) => this.address = address;
    setPhone = (phone) => this.phone = phone;

    getName = () => this.name;
    getAddress = () => this.address;
    getPhone = () => this.phone;
}
class Customer extends Person {
    castomerId;
    isValid;

    setCustomerId = (castomerId) => this.castomerId = castomerId;
    setIsValid = (isValid) => this.isValid = isValid;

    getCastomerId = () => this.castomerId;
    getIsValid = () => this.isValid;
}
const customer = new Customer();
customer.setName('Darya');
customer.setAddress('test');
customer.setPhone('+375296574534');
customer.setCustomerId(45);
customer.setIsValid(true);
console.log(customer.getName(), customer.getAddress(), customer.getPhone());
console.log(customer.getCastomerId(), customer.getIsValid());