// function countOccurrences(str, char) {
// 	let count = 0;
// 	for (let index = 0; index < str.length; index++) {
// 		if (str[index] === char) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

const countOccurrences = (str, char) => str.split(char).length - 1;
module.exports = countOccurrences;
