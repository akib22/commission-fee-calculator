/**
 * After ceiling cents converts it to Euro
 *
 * @param {number} commission - calculated commission
 * @returns {string}
 */
function ceilAndConvertToEuro(commission) {
  return (Math.ceil(commission) / 100).toFixed(2);
}

module.exports = ceilAndConvertToEuro;
