function titleCase(string) {
	const words = string.toLowerCase().split(' ');
	for (let index = 0; index < words.length; index++) {
		words[index] = words[index][0].toUpperCase() + words[index].slice(1);
	}

	return words.join(' ');
}

module.exports = titleCase;
