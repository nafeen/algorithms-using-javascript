
/* Given two strings (lowercase a-z), how many characters do we need remove (from either)
 * to make them anagrams?
 * EXAMPLE: hello, billion --> ANSWER: 6 ('he' from hello and 'biin' from billion)
 */


// function to input two arrays and return the difference in alphabet mapping
const getDelta = function(array1, array2) {

	if ( array1.length !== array2.length ) {
		// todo: handle exception
	}
	let delta = 0;
	for (let i = 0; i < 26; i++) {
		if( typeof array1[i] == 'undefined' ) array1[i] = 0;
		if( typeof array2[i] == 'undefined' ) array2[i] = 0;
		const difference = Math.abs(array1[i] - array2[i]);
		delta += difference;
	}
	return delta;
}


// function to input a string and return alphabet mapping array
const getCharArray = function(stringInput) {
	
	let alphabetArray = new Array(26);
	for (let i = 0; i < stringInput.length; i++) {
		const asciiA = 'a'.charCodeAt();
		const charPosition = stringInput[i].charCodeAt() - asciiA;
	
		if (typeof alphabetArray[charPosition] == 'undefined') alphabetArray[charPosition] = 0;	
		alphabetArray[charPosition]++;
	}
	return alphabetArray;
}


// function to input both strings and return removed characters
const mainFunction = function (stringA, stringB) {

	const charArrayFromA = getCharArray(stringA);
	const charArrayFromB = getCharArray(stringB);
	const numCharRemoved = getDelta(charArrayFromA, charArrayFromB);
	return numCharRemoved;
}

console.log(mainFunction("nafeen","nihitha"));
