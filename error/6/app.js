//Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со
// сторонами заданной длины, и false в любом другом случае. Треугольник
// существует только тогда, когда сумма двух его сторон больше третьей. Требуется
// сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
// сторона окажется больше либо равна сумме двух других, то треугольника с
// такими сторонами не существует

const doTraingle = (a, b, c) => {
    try {
        if (a >= b + c || b >= a + c || c >= a + b) throw new Error(`Треугольника не существует`);
        return true;
    } catch (error) {
        return error.message;
    }
}
console.log(doTraingle(1, 3, 1));