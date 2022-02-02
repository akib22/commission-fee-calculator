const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');

dayjs.extend(isoWeek);

const transactionAmount = {};
/**
 * CashOutNaturalCommission class will calculate the commission fee for cash out transaction
 */
class CashOutNaturalCommission {
  /**
   *
   * @param {Object} transaction - individual transaction
   * @param {Object} config - configuration for cash out transaction type
   */
  constructor(transaction, config) {
    this.transaction = transaction;
    this.config = config;
  }

  calculate() {
    const amount = this.transaction?.operation?.amount;
    const percents = this.config?.percents;
    const weekThreshold = this.config?.week_limit?.amount;

    const date = dayjs(this.transaction.date);

    const key = `${
      this.transaction.user_id
    }_${date.isoWeekYear()}_${date.isoWeek()}`;

    if (!transactionAmount[key]) {
      transactionAmount[key].amount = 0;
    }

    transactionAmount[key].amount += amount;

    if (transactionAmount[key].amount <= weekThreshold) {
      return 0;
    }

    return (
      (transactionAmount[key].amount -
        (transactionAmount[key].amount - amount)) *
      (percents / 100)
    );
  }
}

module.exports = CashOutNaturalCommission;
