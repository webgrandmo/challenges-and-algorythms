const isPalindrome = require('./palindrome');
const fc = require('fast-check');

test('Checking for palindrome strings', () => {
	expect(isPalindrome('racecar')).toBe(true);
	expect(isPalindrome('Hello')).toBe(false);
	expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
	expect(isPalindrome('12321')).toBe(true);
	expect(isPalindrome(12321)).toBeUndefined();
});

describe('Property-based tests for isPalindrome', () => {
	test('Palindrome property: cleaned string equals its reverse', () => {
		fc.assert(
			fc.property(fc.string(), (str) => {
				const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
				const expected = cleaned === [...cleaned].reverse().join('');
				return isPalindrome(str) === expected;
			}),
		);
	});

	test('Non-string inputs always return undefined', () => {
		fc.assert(
			fc.property(
				fc.anything().filter((v) => typeof v !== 'string'),
				(value) => isPalindrome(value) === undefined,
			),
		);
	});
});
