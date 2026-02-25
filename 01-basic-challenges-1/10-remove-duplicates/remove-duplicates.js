/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */

// Solution using For Loop
// function removeDuplicates(array)
// {
// 	const uniqueArray = [];
// 	for (let i = 0; i < array.length; i++) {
// 		if (!uniqueArray.includes(array[i])) {
// 			uniqueArray.push(array[i]);
// 		}
// 	}
// 	return uniqueArray;
// }

// Solution using Set()
// const removeDuplicates = (arr) => [...new Set(arr)];

// Solution using filter

const removeDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

module.exports = removeDuplicates;
