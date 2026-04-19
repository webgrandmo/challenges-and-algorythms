/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */

// function areAllCharactersUnique(str) {
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
// 	}
// 	return true;
// }

function areAllCharactersUnique(str) {
	const set = new Set(str);
	return set.size === str.length;
}

module.exports = areAllCharactersUnique;
