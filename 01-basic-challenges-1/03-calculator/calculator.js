/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */

function calculator(num1, num2, operator) {
	let result;
	switch (operator) {
		case '+':
			result = Number(num1) + Number(num2);
			break;
		case '-':
			result = Number(num1) - Number(num2);
			break;
		case '*':
			result = Number(num1) * Number(num2);
			break;
		case '/':
			result = Number(num1) / Number(num2);
			break;
		default:
			throw new Error('Invalid operator');
	}

	return result;
}

module.exports = calculator;
