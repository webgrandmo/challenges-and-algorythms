const removeDuplicates = require('./remove-duplicates');

test('Removing duplicates from an array', () => {
	expect(removeDuplicates([1, 2, 3, 2, 4, 1, 5])).toEqual([1, 2, 3, 4, 5]);
	expect(removeDuplicates(['apple', 'banana', 'orange', 'banana', 'kiwi'])).toEqual([
		'apple',
		'banana',
		'orange',
		'kiwi',
	]);
	expect(removeDuplicates([true, true, false, true, false])).toEqual([true, false]);
});

const fc = require('fast-check');

describe('Property-based tests for removeDuplicates', () => {
	test('Result contains no duplicates', () => {
		fc.assert(
			fc.property(fc.array(fc.anything()), (arr) => {
				const result = removeDuplicates(arr);

				// Перевіряємо, що всі елементи унікальні
				return result.every((item, index) => result.indexOf(item) === index);
			}),
		);
	});

	test('Result contains only elements from the original array', () => {
		fc.assert(
			fc.property(fc.array(fc.anything()), (arr) => {
				const result = removeDuplicates(arr);

				return result.every((item) => arr.includes(item));
			}),
		);
	});

	test('Order of first occurrences is preserved', () => {
		fc.assert(
			fc.property(fc.array(fc.anything()), (arr) => {
				const result = removeDuplicates(arr);

				// Перевіряємо, що порядок перших появ зберігається
				const expected = arr.filter((item, index) => arr.indexOf(item) === index);

				return JSON.stringify(result) === JSON.stringify(expected);
			}),
		);
	});
});
