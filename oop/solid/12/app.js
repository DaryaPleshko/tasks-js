// Реализуйте класс Sort, сдержащий метод sortData, сортирующий все числа
// статичного массива сортировкой пузырьком
class Sort {
    sortData = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }
}
const sort = new Sort();
console.log(sort.sortData([8, 7, 0, 5, 3, 1])); 