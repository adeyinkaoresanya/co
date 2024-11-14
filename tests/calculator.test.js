const { Calculator, DivisionByZeroError } = require('../src/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(6, 2)).toBe(12);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(15, 3)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow(DivisionByZeroError);
    });

    test('calculates power of a number', () => {
        expect(calculator.power(2, 3)).toBe(8);
    });
    
    test('calculates square root of a number', () => {
        expect(calculator.sqrt(16)).toBe(4);
    });
    
    test('throws error for square root of negative number', () => {
        expect(() => calculator.sqrt(-1)).toThrow(RangeError);
    });
    
    test('calculates percentage', () => {
        expect(calculator.percentage(200, 10)).toBe(20);
    });
});