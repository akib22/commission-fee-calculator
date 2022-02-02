const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');
const {convertToCents} = require('../../utils');
const {message} = require('../../constants');

dayjs.extend(isoWeek);

const transactionAmount = {};
/**
 * CashOutNaturalCommission class will calculate the commission fee for natural cash out transaction
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

    if (!amount || !percents || !weekThreshold) {
      return message.transaction_error;
    }

    const date = dayjs(this.transaction.date);

    // creating unique id based on user's weekly transaction
    const key = `${
      this.transaction.user_id
    }_${date.isoWeekYear()}_${date.isoWeek()}`;

    if (!transactionAmount[key]) {
      transactionAmount[key] = {
        amount: 0,
        payableAmount: 0,
      };
    }

    transactionAmount[key].amount += amount;

    if (transactionAmount[key].amount <= weekThreshold) {
      return 0;
    }

    const totalPayable =
      (transactionAmount[key].amount - weekThreshold) * (percents / 100);

    const commission = totalPayable - transactionAmount[key].payableAmount;
    transactionAmount[key].payableAmount = totalPayable;

    return convertToCents(commission);
  }
}

module.exports = CashOutNaturalCommission;
