/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */

function findMissingNumber(arr) {
	// if (!arr.length) return undefined;

	if (arr.length === 0) return 1;
	let n = arr.length + 1;

	// Get expected sum of numbers using particular formula
	let expectedSum = (n * (n + 1)) / 2;
	// let actualSum = 0;
	// Get sum of numbers in the array using for loop
	// for (let i = 0; i < arr.length; i++) {
	// 	actualSum += arr[i];
	// }

	// Get sum of numbers in the array using reduce method

	const actualSum = arr.reduce((sum, num) => sum + num, 0);

	return expectedSum - actualSum;
}

module.exports = findMissingNumber;
