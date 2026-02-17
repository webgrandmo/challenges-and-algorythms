const calculator = require('./calculator');

test('Performing arithmetic operations using the calculator function', () => {
	// Test case inputs
	const num1 = 5;
	const num2 = 7;
	const operators = ['+', '-', '*', '/'];
	const invalidOperator = undefined || null;

	// Addition
	expect(calculator(num1, num2, '+')).toBe(12);

	// Subtraction
	expect(calculator(num1, num2, '-')).toBe(-2);

	// Multiplication
	expect(calculator(num1, num2, '*')).toBe(35);

	// Division
	expect(calculator(num1, num2, '/')).toBeCloseTo(0.7143, 4);

	// Not NaN
	expect(calculator(num1, num2, ...operators)).not.toBeNaN();

	// Throw error in case of invalid operator
	expect(() => calculator(num1, num2, invalidOperator)).toThrow();
});
