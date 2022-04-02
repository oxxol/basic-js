const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dom = domains.map((el) => el.split('.').reverse())
  let arr = []
  for (let i = 0; i < dom.length; i++) {
    let str = ''
    for (let j = 0; j < dom[i].length; j++) {

      if (dom[i][j]) {
        str += ('.') + dom[i][j]
        arr.push(str)
      }
    }
  }
  let res = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {});
  return res
}

module.exports = {
  getDNSStats
};
