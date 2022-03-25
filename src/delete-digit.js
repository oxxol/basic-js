const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n)
  let str1;
  let arr1 = []
  for (let i = 0; i < str.length; i++) {
    str1 = str.slice(0, i) + str.slice(i + 1)
    arr1.push(str1)
  }
  arr1.sort((a, b) => b - a)
  return +arr1[0]
}

module.exports = {
  deleteDigit
};
