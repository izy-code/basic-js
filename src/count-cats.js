const CAT_EARS = '^^';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {  
  let catCount = 0;

  backyard.forEach(row => {
    row.forEach(hidingPlace => {
      if (hidingPlace === CAT_EARS) catCount++;
    });
  });

  return catCount;
}

module.exports = {
  countCats
};
