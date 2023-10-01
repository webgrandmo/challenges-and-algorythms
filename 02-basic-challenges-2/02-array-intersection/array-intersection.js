function arrayIntersection(array1, array2) {
	const intersectionArray = [];

	for (let i = 0; i < array1.length; i++) {
		if (array2.includes(array1[i]) && !intersectionArray.includes(array1[i])) {
			intersectionArray.push(array1[i]);
		}
	}

	return intersectionArray;
}

module.exports = arrayIntersection;
