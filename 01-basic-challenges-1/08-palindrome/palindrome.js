/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.

 */

// Solution using regular expression
// function isPalindrome(string) {
// 	if (typeof string !== 'string') return;
// 	const formattedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
// 	return formattedString.split('').reverse().join('') === formattedString;
// }

function isPalindrome(string) {
	if (typeof string !== 'string') return;
	const formattedString = removeNonAlphaNumeric(string.toLowerCase());
	const reversedStr = reverseString(formattedString);
	return formattedString === reversedStr;
}

function removeNonAlphaNumeric(string) {
	let formattedString = '';
	for (let i = 0; i < string.length; i++) {
		const char = string[i];
		if (isAlphaNumeric(char)) {
			formattedString += char;
		}
	}

	return formattedString;
}

function isAlphaNumeric(char) {
	const code = char.charCodeAt(0);

	return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(string) {
	let reversed = '';

	for (let i = string.length - 1; i >= 0; i--) {
		reversed += string[i];
	}
	return reversed;
}

module.exports = isPalindrome;
