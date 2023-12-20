/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitsArray = String(n).split('').map(Number);

  const converseDigitsArrayToNumber = (digits) => Number(digits.join(''));

  for (let i = 0; i < digitsArray.length - 1; i++) {
    if (digitsArray[i] < digitsArray[i + 1]) {
      digitsArray.splice(i, 1);

      return converseDigitsArrayToNumber(digitsArray);
    }
  }

  digitsArray.pop();

  return converseDigitsArrayToNumber(digitsArray);
}

module.exports = {
  deleteDigit
};
