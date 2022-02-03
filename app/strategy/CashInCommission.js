const {convertToCents} = require('../../utils');
const {message} = require('../../constants');

/**
 * CashInCommission class will calculate the commission fee for cash in transaction
 */
class CashInCommission {
  /**
   *
   * @param {Object} transaction - individual transaction
   * @param {Object} config - configuration for cash in transaction type
   */
  constructor(transaction, config) {
    this.transaction = transaction;
    this.config = config;
  }

  /**
   * calculate the cash in commission fee
   *
   * @returns {number | string}
   */
  calculate() {
    const amount = convertToCents(this.transaction?.operation?.amount);
    const percents = this.config?.percents;
    const maxThreshold = convertToCents(this.config?.max?.amount);

    if (!amount || !percents || !maxThreshold) {
      return message.transaction_error;
    }

    const commission = amount * (percents / 100);

    /* if the commission is greater than max commission fee,
     * max commission will return otherwise calculated commission will return cents
     */
    return commission > maxThreshold ? maxThreshold : commission;
  }
}

module.exports = CashInCommission;
