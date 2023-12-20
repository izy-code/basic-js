const CONTROL_SEQUENCES = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw TypeError("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let elementDiscarded = false;

  for (let i = 0; i < arr.length; i++) {
    if (CONTROL_SEQUENCES.includes(arr[i])) {
      switch (arr[i]) {
        case CONTROL_SEQUENCES[0]:
          elementDiscarded = true;
          i++;
          break;
        case CONTROL_SEQUENCES[1]:
          if (!elementDiscarded) result.pop()
          break;
        case CONTROL_SEQUENCES[2]:
          if (arr[i + 1]) result.push(arr[i + 1])
          break;
        case CONTROL_SEQUENCES[3]:
          if (!elementDiscarded && result.length !== 0) result.push(result[result.length - 1])
          break;
      }
    } else {
      result.push(arr[i]);
      elementDiscarded = false;
    }
  }

  return result;
}

module.exports = {
  transform
};
