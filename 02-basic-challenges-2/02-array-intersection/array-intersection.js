/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */

function arrayIntersection(arr1, arr2) {
	const intersectedArray = [];

	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i]) && !intersectedArray.includes(arr1[i])) {
			intersectedArray.push(arr1[i]);
		}
	}

	return intersectedArray;
}

module.exports = arrayIntersection;
