const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('adds two numbers', () => {
        expect(calc.add(5, 3)).toBe(8);
    });

    test('subtracts two numbers', () => {
        expect(calc.subtract(10, 4)).toBe(6);
    });

    test('multiplies two numbers', () => {
        expect(calc.multiply(6, 2)).toBe(12);
    });

    test('divides two numbers', () => {
        expect(calc.divide(15, 3)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow(Error);
    });
});