// function isPalindrome(str) {
// 	let formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
// 	let reversedString = formattedString.split('').reverse().join('');
// 	return formattedString === reversedString;
// }

function isPalindrome(str) {
	let formattedString = removeNonAlphanumeric(str.toLowerCase());
	let reversedString = reverseString(formattedString);
	return formattedString === reversedString;
}

function removeNonAlphanumeric(str) {
	let formattedString = '';
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (isAlphaNumeric(char)) {
			formattedString += char;
		}
	}
	return formattedString;
}

function isAlphaNumeric(char) {
	let code = char.charCodeAt(0);
	return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function reverseString(str) {
	return str.split('').reverse().join('');
}

module.exports = isPalindrome;
