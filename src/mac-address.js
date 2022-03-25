const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-')
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let chars = ['A', 'B', 'C', 'D', 'E', 'F']
  let result = 0;
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if ((numbers.includes(arr[i][0]) || chars.includes(arr[i][0])) && (numbers.includes(arr[i][1]) || chars.includes(arr[i][1]))) {
      result++;
    }
  } return result === 6
}

module.exports = {
  isMAC48Address
};
