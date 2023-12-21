/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  function countNeighbors(row, column) {
    let neighborMinesCount = 0;

    function checkMine(row, column) {
      if (row < 0 || row > matrix.length - 1 || column < 0 || column > matrix[0].length - 1) return;

      if (matrix[row][column]) neighborMinesCount++;
    }

    checkMine(row - 1, column);
    checkMine(row + 1, column);
    checkMine(row, column - 1);
    checkMine(row, column + 1);
    checkMine(row - 1, column - 1);
    checkMine(row + 1, column + 1);
    checkMine(row - 1, column + 1);
    checkMine(row + 1, column - 1);

    return neighborMinesCount;
  }

  for (let row = 0; row < matrix.length; row++) {
    result[row] = [];
    for (let column = 0; column < matrix[0].length; column++) {
      result[row][column] = countNeighbors(row, column);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
