const getSum = require('./get-sum');

test('Calculating the sum of two numbers', () => {
	// Test case inputs
	const num1 = 5;
	const num2 = 7;

	// Call the function
	const result = getSum(num1, num2);

	// Check if the result is equal to the expected sum
	expect(result).toBe(12);
});

test('Throw NAN if one of params are not a number', () => {
	// Test case inputs
	const num1 = 1;
	const num2 = '2';

	// Call the function
	const result = getSum(num1, num2);

	// Check if NaN is returned
	expect(result).not.toBeNaN();
});
