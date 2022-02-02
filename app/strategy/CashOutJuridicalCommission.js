const {convertToCents} = require('../../utils');

/**
 * CashOutJuridicalCommission class will calculate the commission fee for cash out transaction
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
    const amount = this.transaction?.operation?.amount;
    const percents = this.config?.percents;
    const minThreshold = this.config?.min?.amount;

    if (!amount || !percents || !minThreshold) {
      return 'Transaction incomplete';
    }

    const commission = amount * (percents / 100);

    /* if the commission is less than min commission fee,
     * min commission will return otherwise calculated commission will return as cents
     */

    return convertToCents(
      commission < minThreshold ? minThreshold : commission
    );
  }
}

module.exports = CashOutJuridicalCommission;
