/**
 * converts to cents by multiplying the amount with 100
 *
 * @param {number} amount
 * @returns {number}
 */
const convertToCents = amount => {
  return amount * 100;
};

module.exports = convertToCents;
