function reverseString(str) {
	var strReverse = str.split("").reverse().join("");
	if (str.length < 1) {
		return null;
	} else if (strReverse === str) {
		return true;
	}
	
	return strReverse;
}

module.exports = reverseString;