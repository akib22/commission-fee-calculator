const {convertToCents, isNumber} = require('../../utils');
const {message} = require('../../constants');

/**
 * CashOutJuridicalCommission class will calculate the commission fee for juridical cash out transaction
 */
class CashOutJuridicalCommission {
  /**
   *
   * @param {Object} transaction - individual transaction
   * @param {Object} config - configuration for cash out transaction type
   */
  constructor(transaction, config) {
    this.transaction = transaction;
    this.config = config;
  }

  /**
   * calculate the cash out commission fee
   *
   * @returns {number | string}
   */
  calculate() {
    const amount = convertToCents(this.transaction?.operation?.amount);
    const percents = this.config?.percents;
    const minThreshold = convertToCents(this.config?.min?.amount);

    if (!isNumber(amount) || !isNumber(percents) || !isNumber(minThreshold)) {
      return message.transaction_error;
    }

    const commission = amount * (percents / 100);

    /* if the commission is less than min commission fee,
     * min commission will return otherwise calculated commission will return as cents
     */
    return commission < minThreshold ? minThreshold : commission;
  }
}

module.exports = CashOutJuridicalCommission;
