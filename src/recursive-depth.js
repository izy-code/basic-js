/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(nestedArray) {
    let maxDepth = 1;

    nestedArray.forEach(element => {
      if (element instanceof Array) {
        const elementDepth = this.calculateDepth(element) + 1;
        maxDepth = Math.max(elementDepth, maxDepth);
      }
    });

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
