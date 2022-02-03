const dayjs = require('dayjs');
const isoWeek = require('dayjs/plugin/isoWeek');
const {convertToCents} = require('../../utils');
const {message} = require('../../constants');

dayjs.extend(isoWeek);

const weeklyTransactionHistory = {};
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
    const amount = convertToCents(this.transaction?.operation?.amount);
    const percents = this.config?.percents;
    const weeklyThreshold = convertToCents(this.config?.week_limit?.amount);

    if (!amount || !percents || !weeklyThreshold) {
      return message.transaction_error;
    }

    // convert string to date type
    const date = dayjs(this.transaction.date);

    // creating unique id based on user's weekly transaction
    const key = `${
      this.transaction.user_id
    }_${date.isoWeekYear()}_${date.isoWeek()}`;

    // initialize weekly transaction history based on unique id
    if (!weeklyTransactionHistory[key]) {
      weeklyTransactionHistory[key] = {
        totalCaseOut: 0,
        totalCommission: 0,
      };
    }

    weeklyTransactionHistory[key].totalCaseOut += amount;

    // if total case out is less than weekly threshold, return 0 commission
    if (weeklyTransactionHistory[key].totalCaseOut <= weeklyThreshold) {
      return 0;
    }

    /**
     * commission is calculated only from exceeded amount
     *
     * calculating commission based on total case out amount
     */
    const totalCommission =
      (weeklyTransactionHistory[key].totalCaseOut - weeklyThreshold) *
      (percents / 100);

    // subtraction current case out commission to pervious transaction commission
    const commission =
      totalCommission - weeklyTransactionHistory[key].totalCommission;

    // store the new commission, to calculate next case out commission.
    weeklyTransactionHistory[key].totalCommission = totalCommission;

    return commission;
  }
}

module.exports = CashOutNaturalCommission;
