/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let count = 1;
  let currentLetter = '';

  str.split('').forEach((letter) => {
    if (letter !== currentLetter) {
      if (count > 1) result.push(`${count}${currentLetter}`);
      else result.push(currentLetter);

      currentLetter = letter;
      count = 1;
    } else count += 1;
  });

  if (count > 1) result.push(`${count}${currentLetter}`);
  else result.push(currentLetter);

  return result.join('');
}

module.exports = encodeLine;
