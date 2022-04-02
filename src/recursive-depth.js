const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
// class DepthCalculator {
//   calculateDepth(arr, count = 0) {
//     let depth
//     if (Array.isArray(arr)) {
//       count++
//       depth = count
//     }
//     for (let item of arr) {
//       if (Array.isArray(item)) {
//         let res = this.calculateDepth(item, count)
//         depth = Math.max(depth, res)
//       }
//     } return depth
//   }
// }
class DepthCalculator {
  calculateDepth(arr, count = 0) {
    let depth = count
    for (let item of arr) {
      if (Array.isArray(item)) {
        let res = this.calculateDepth(item, count)
        depth = Math.max(depth, res)
      }
    } return depth + 1
  }
}


module.exports = {
  DepthCalculator
};
