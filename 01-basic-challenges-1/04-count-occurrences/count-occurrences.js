/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */

function countOccurrences(string, char) {
	const lowerString = string.toLowerCase();
	const lowerChar = char.toLowerCase();

	let count = 0;

	for (let index = 0; index < lowerString.length; index++) {
		if (lowerString[index] === lowerChar) {
			count++;
		}
	}
	return count;
}

module.exports = countOccurrences;
