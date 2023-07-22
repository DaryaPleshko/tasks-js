const { step, multy, sumArr } = require('./app');

describe('step:', () => {
    test('', () => {
        const result = step(2, 3);
        expect(result).toBe(8);
    });

    test('', () => {
        const result = step('d', 'f');
        expect(result).toBe('Ошибка типов данных');
    });
});

describe('multy:', () => {
    test('', () => {
        const result = multy(2, 3);
        expect(result).toBe(6);
    });

    test('', () => {
        const result = multy(5, 0);
        expect(result).toBe(0);
    });

    test('', () => {
        const result = multy('d', 'l');
        expect(result).toBe('Ошибка типов данных');
    });
});


describe('sumArr:', () => {
    test('', () => {
        const result = sumArr([1, 2, 3, 4]);
        expect(result).toBe(10);
    });

    test('', () => {
        const result = sumArr(['d', 'l', 'h', 'j']);
        expect(result).toBe('Ошибка типов данных');
    });

    test('', () => {
        const result = sumArr(4);
        expect(result).toBe('не массив');
    });
});

describe('filterArray:', () => {
    test('', () => {
        const result = filterArray([
            { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
            { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
            { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
            { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
            { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
            { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
            { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
        ]);
        expect(result).toEqual([{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' }, { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]);
    });

    test('', () => {
        const result = filterArray(5);
        expect(result).toEqual('не массив');
    });
});

describe('createArray:', () => {
    test('', () => {
        const result = createArray(['11111', '22222', '33333', '22222']);
        expect(result).toEqual(['11111', '22222', '33333']);
    });
    test('', () => {
        const result = createArray(['11111', 22222, 33333, 22222]);
        expect(result).toEqual('ошибка типов данных');
    });
});