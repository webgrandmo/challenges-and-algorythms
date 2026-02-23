/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
//Solution using built in methods
// function reverseString(string) {
// 	const updatedString = string.split('');
// 	return updatedString.reverse().join('');
// }

// Solution using loop

function reverseString(string) {
	let reversed = '';

	for (let i = string.length - 1; i >= 0; i--) {
		reversed += string[i];
	}
	return reversed;
}

module.exports = reverseString;
