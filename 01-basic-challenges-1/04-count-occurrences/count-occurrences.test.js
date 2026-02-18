const countOccurrences = require('./count-occurrences');

test('Count Occurrences of a Character', () => {
	expect(countOccurrences('hello', 'l')).toBe(2);
	expect(countOccurrences('programming', 'm')).toBe(2);
	expect(countOccurrences('bANana', 'A')).toBe(3);
});
