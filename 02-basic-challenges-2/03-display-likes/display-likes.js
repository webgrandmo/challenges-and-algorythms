/**
 * Returns a string of who likes the post.
 * @param {string[]} names - The names of the people who like the post.
 * @returns {string} - A string of who likes the post.
 */

function displayLikes(names) {
	const count = names.length;
	const templates = {
		0: 'no one likes this',
		1: `${names[0]} likes this`,
		2: `${names[0]} and ${names[1]} like this`,
		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
	};

	return templates[count] || `${names[0]}, ${names[1]} and ${count - 2} others like this`;
}

module.exports = displayLikes;
