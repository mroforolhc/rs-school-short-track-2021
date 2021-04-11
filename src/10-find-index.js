/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let finish = array.length;
  let point = Math.floor((finish + start) / 2);

  for (let i = 0; i < array.length; i++) {
    if (array[point] === value) return point;

    if (value < array[point]) finish = point;
    else start = point;

    point = Math.floor((start + finish) / 2);
  }

  return -1;
}

module.exports = findIndex;
