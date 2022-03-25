const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date instanceof Date === false || date === new Date()) {
    throw new Error('Invalid date!')
  }
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  let month = date.getMonth()
  if (month > 1 && month < 5) {
    return 'spring'
  } else if
    (month > 4 && month < 8) {
    return 'summer'
  } else if
    (month > 7 && month < 11) {
    return 'autumn'
  } else {
    return 'winter'
  }


}


module.exports = {
  getSeason
};
