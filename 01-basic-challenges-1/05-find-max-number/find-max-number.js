/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */

function findMaxNumber(numbers) {
	let maxNum = numbers[0];

	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] !== 'number') return NaN;
		if (numbers[i] > maxNum) {
			maxNum = numbers[i];
		}
	}
	return maxNum;
}

module.exports = findMaxNumber;
