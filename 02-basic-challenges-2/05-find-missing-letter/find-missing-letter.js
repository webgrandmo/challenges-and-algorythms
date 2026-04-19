/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.
 */

function findMissingLetter(arr) {
	if (arr.length === 0) return '';

	for (let i = 0; i < arr.length - 1; i++) {
		const current = arr[i].charCodeAt(0);
		const next = arr[i + 1].charCodeAt(0);

		if (next !== current + 1) {
			return String.fromCharCode(current + 1);
		}
	}

	return '';
}

module.exports = findMissingLetter;
