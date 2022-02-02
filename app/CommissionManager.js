const {transactionTypes} = require('../constants');

/**
 * CommissionManager class will decide, which strategy will follow by each transaction
 */
class CommissionManager {
  /**
   * map all the configuration with class property
   *
   * @param {Array<Object>} configs - transaction configuration list
   */
  constructor(configs) {
    configs?.forEach(({type, ...config}) => {
      this[type] = config;
    });
  }

  /**
   * calculate the commission for each transaction
   *
   * @param {Object} transaction - each individual transaction
   * @returns {number | string}
   */
  getCommission(transaction) {
    const {type, user_type: userType} = transaction;

    const transactionId = `${type}_${userType}`;

    console.log(this);

    if (transactionId.startsWith(transactionTypes.CASH_IN)) {
      return 0;
    }

    if (transactionId.startsWith(transactionTypes.CASH_OUT_JURIDICAL)) {
      return 0;
    }

    if (transactionId.startsWith(transactionTypes.CASH_OUT_NATURAL)) {
      return 0;
    }

    return 'Transaction type not match';
  }
}

module.exports = CommissionManager;
