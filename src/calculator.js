/**
 * Custom error class for handling division by zero operations.
 * @extends {Error}
 * @class
 * @throws {DivisionByZeroError} When attempting to divide by zero
 */
class DivisionByZeroError extends Error {
    constructor() {
        super('Division by zero is not allowed');
        this.name = 'DivisionByZeroError';
    }
}


/**
 * A calculator class that performs basic arithmetic operations.
 * @example
 * const calc = new Calculator();
 * 
 * // Addition
 * calc.add(5, 3); // returns 8
 * 
 * // Subtraction
 * calc.subtract(10, 4); // returns 6
 * 
 * // Multiplication
 * calc.multiply(6, 2); // returns 12
 * 
 * // Division
 * calc.divide(15, 3); // returns 5
 * 
 * // Division by zero
 * try {
 *   calc.divide(10, 0); // throws Error
 * } catch (error) {
 *   console.error(error.message);
 * }
 */

class Calculator {
    /**
     * Adds two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of a and b.
     */

    add(a, b) {
        return a + b;
    }

    /**
     * Subtracts two numbers.
     * @param {number} a - The number to subtract from.
     * @param {number} b - The number to subtract.
     * @returns {number} The difference between a and b.
     */
    subtract(a, b) {
        return a - b;
    }

    /**
     * Multiplies two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The product of a and b.
     */
    multiply(a, b) {
        return a * b;
    }

    /**
     * Divides two numbers.
     * @param {number} a - The dividend (number to be divided).
     * @param {number} b - The divisor (number to divide by).
     * @returns {number} The quotient of the division.
     * @throws {DivisionByZeroError} If the divisor is zero.
     */
    divide(a, b) {
        if (b === 0) {
            throw new DivisionByZeroError();
        }
        return a / b;
    }

/**
 * Calculates the power of a number.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} The result of base raised to the exponent.
 */
power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a given number.
 * @param {number} number - The number to calculate the square root of.
 * @returns {number} The square root of the input number.
 * @throws {RangeError} If the input number is negative.
 */
sqrt(number) {
    if (number < 0) {
        throw new RangeError('Square root of negative number is not allowed');
    }
    return Math.sqrt(number);
}

/**
 * Calculates the percentage of a number.
 * @param {number} number - The number to calculate percentage of.
 * @param {number} percent - The percentage to calculate.
 * @returns {number} The percentage value.
 */
percentage(number, percent) {
    return (number * percent) / 100;
}





}
 
module.exports = {Calculator, DivisionByZeroError};