/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */

function countVowels(string) {
	const formattedString = string.toLowerCase();
	let count = 0;

	for (let i = 0; i < formattedString.length; i++) {
		const char = formattedString[i];
		if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
			count++;
		}
	}

	return count;
}

module.exports = countVowels;
