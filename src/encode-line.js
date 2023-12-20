/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedLine = '';
  let charsCount = 1;

  for (let charIndex = 0; charIndex < str.length; charIndex++) {
    if (str[charIndex] === str[charIndex + 1]) {
      charsCount++;
    } else {
      encodedLine += (charsCount > 1) ? `${charsCount}${str[charIndex]}` : str[charIndex];
      charsCount = 1;
    }
  }

  return encodedLine;
}

module.exports = {
  encodeLine
};
