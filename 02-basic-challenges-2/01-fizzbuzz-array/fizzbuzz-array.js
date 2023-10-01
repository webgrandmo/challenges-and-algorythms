function fizzBuzzArray(number) {
	const array = [];
	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			array.push('FizzBuzz');
		} else if (i % 5 === 0) {
			array.push('Buzz');
		} else if (i % 3 === 0) {
			array.push('Fizz');
		} else {
			array.push(i);
		}
	}

	return array;
}

module.exports = fizzBuzzArray;
