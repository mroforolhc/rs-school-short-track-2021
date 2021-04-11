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
  return matrix.map((array, i) => array.map((cell, j) => {
    if (cell === true) return 1;
    return [
      i > 0 && j > 0 ? matrix[i - 1][j - 1] : undefined,
      i > 0 ? matrix[i - 1][j] : undefined,
      i > 0 && j < array.length - 1 ? matrix[i - 1][j + 1] : undefined,
      j > 0 ? matrix[i][j - 1] : undefined,
      j < array.length - 1 ? matrix[i][j + 1] : undefined,
      i < matrix.length - 1 && j > 0 ? matrix[i + 1][j - 1] : undefined,
      i < matrix.length - 1 ? matrix[i + 1][j] : undefined,
      i < matrix.length - 1 && j < array.length - 1 ? matrix[i + 1][j + 1] : undefined,
    ].reduce((prev, curr) => (curr === true ? prev + 1 : prev), 0);
  }));
}

module.exports = minesweeper;
