// ! Quick Question #1

new Set([1, 1, 2, 2, 3, 4]);

/* output:
 *   Set(4) {1, 2, 3, 4}
 */

// ! Quick Question #2

[...new Set("referee")].join("");

/* output:
 *   'ref'
 */

// ! Quick Question #3

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

/*
 *   0: {Array(3) => true}
 *   1: {Array(3) => false}
 */

// ! hasDuplicate

const hasDuplicate = (arr) => (new Set(arr).size !== arr.length ? true : false);

// ! vowelCount

function isVowel(letter) {
	return "aeiou".includes(letter);
}

function vowelCount(str) {
	const vowelMap = new Map();
	for (let letter of str) {
		let lowerCaseLetter = letter.toLowerCase();
		if (isVowel(lowerCaseLetter)) {
			if (vowelMap.has(lowerCaseLetter)) {
				vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);
			} else {
				vowelMap.set(lowerCaseLetter, 1);
			}
		}
	}
	return vowelMap;
}
