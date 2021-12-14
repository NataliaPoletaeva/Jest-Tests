const { test, expect } = require('@jest/globals');
const {
    stringLength,
    reverseString,
    calculator,
    capitalizeString
} = require('./functions');

test('returns the correct length of the string', () => {
    expect(stringLength('friend')).toBe(6);
});

test('throws an error about short message', () => {
    expect(() => stringLength('')).toThrowError();
});

test('throws an error about long message', () => {
    expect(() => stringLength('colossal titan')).toThrowError();
});

test('returns reversed string', () => {
    expect(reverseString('Tusa')).toBe('asuT');
})

describe('Calculator functions:', () => {

    test('returns the sum of two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(7, 62)).toBe(69);
        expect(calculator.add(-1, 4)).toBe(3);
    })

    test('returns the difference of two numbers', () => {
        expect(calculator.subtract(2, 3)).toBe(-1);
        expect(calculator.subtract(9, 4)).toBe(5);
        expect(calculator.subtract(22, 3)).toBe(19);
    })

    test('returns the product of two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(9, 8)).toBe(72);
        expect(calculator.multiply(21, 4)).toBe(84);
    })

    test('returns the quotient of two numbers', () => {
        expect(calculator.divide(32, 4)).toBe(8);
        expect(calculator.divide(0.75, 3)).toBe(0.25)
        expect(calculator.divide(9, 3)).toBe(3)
    })

});

describe('Capitalizing', () => {
    test('test for non-string input', () => {
        expect(() => capitalizeString(4)).toThrow();
    })

    test('takes string as an input and returns capitalized string', () => {
        expect(capitalizeString('cloud')).toBe('Cloud');
    })
})
