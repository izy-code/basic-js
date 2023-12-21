/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} array
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  const heights = array.filter(height => height !== -1);
  const sortedHeights = heights.sort((a, b) => a - b);

  let sortedHeightsIndex = 0;

  return array.map((item) => {
    if (item !== -1) {
      return sortedHeights[sortedHeightsIndex++];
    }

    return item;
  });
}

module.exports = {
  sortByHeight
};
