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

  [...str].forEach((char, charIndex) => {      
    if (char === str[charIndex + 1]) {
      charsCount++;
    } else {
      encodedLine += (charsCount > 1) ? `${charsCount}${char}` : char;
      charsCount = 1;
    }
  });

  return encodedLine;
}

module.exports = {
  encodeLine
};
