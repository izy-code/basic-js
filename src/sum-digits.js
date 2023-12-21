/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let currentSum = 0;

  while (n !== 0) {
    currentSum += n % 10;
    n = Math.trunc(n / 10);
  }

  if (currentSum < 10) return currentSum;

  return getSumOfDigits(currentSum);
}

module.exports = {
  getSumOfDigits
};
