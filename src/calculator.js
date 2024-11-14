
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
     * @param {number} a - The dividend.
     * @param {number} b - The divisor.
     * @returns {number} The quotient of a divided by b.
     * @throws {Error} When b is 0.
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
}
 
module.exports = Calculator;