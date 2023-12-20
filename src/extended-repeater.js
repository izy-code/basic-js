/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  function repeatWithSeparator(string, repeatSeparator, repeatCount) {
    return repeatCount > 1 ? (string + repeatSeparator).repeat(repeatCount - 1) + string : string;
  }

  str = String(str);
  addition = String(addition);

  const repeatedAddition = repeatWithSeparator(addition, additionSeparator, additionRepeatTimes);

  return repeatWithSeparator(str + repeatedAddition, separator, repeatTimes);
}

module.exports = {
  repeater
};
