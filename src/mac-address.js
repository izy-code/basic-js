const GROUPS_COUNT = 6;
const HEX_DIGITS_REGEX = /[\dA-F]/i;

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} input
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(input) {
  const isHexDigit = (digit) => HEX_DIGITS_REGEX.test(digit);

  const groups = input.split('-');

  if (groups.length !== GROUPS_COUNT) return false;

  for (let group of groups) {
    for (let digit of group) {
      if (!isHexDigit(digit)) return false;
    }
  }

  return true;
}

module.exports = {
  isMAC48Address
};
