function findMaxNumber(arr) {
	let max = arr[0];

	for (let index = 1; index < arr.length; index++) {
		if (arr[index] > max) {
			max = arr[index];
		}
	}
	return max;
}

module.exports = findMaxNumber;
