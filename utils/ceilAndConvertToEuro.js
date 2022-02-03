/**
 * After ceiling cents converts it to euro
 *
 * @param {number} commission - calculated commission
 * @returns {string}
 */
const ceilAndConvertToEuro = commission => {
  return (Math.ceil(commission) / 100).toFixed(2);
};

module.exports = ceilAndConvertToEuro;
