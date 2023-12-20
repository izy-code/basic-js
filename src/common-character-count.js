/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function calculateChars(string) {
    const charCountObject = {};

    for (let char of string) {
      if (charCountObject.hasOwnProperty(char)) {
        charCountObject[char]++;
      } else {
        charCountObject[char] = 1;
      }
    }

    return charCountObject;
  }

  const charCountObject1 = calculateChars(s1);
  const charCountObject2 = calculateChars(s2);
  let result = 0;

  for (const char in charCountObject1) {
    if (charCountObject2[char]) {
      result += Math.min(charCountObject1[char], charCountObject2[char]);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
