const {transactionTypes, message} = require('../constants');
const {
  CashInCommission,
  CashOutJuridicalCommission,
  CashOutNaturalCommission,
} = require('./strategy');

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

    if (transactionId.startsWith(transactionTypes.CASH_IN)) {
      return new CashInCommission(
        transaction,
        this[transactionTypes.CASH_IN]
      ).calculate();
    }

    if (transactionId.startsWith(transactionTypes.CASH_OUT_JURIDICAL)) {
      return new CashOutJuridicalCommission(
        transaction,
        this[transactionTypes.CASH_OUT_JURIDICAL]
      ).calculate();
    }

    if (transactionId.startsWith(transactionTypes.CASH_OUT_NATURAL)) {
      return new CashOutNaturalCommission(
        transaction,
        this[transactionTypes.CASH_OUT_NATURAL]
      ).calculate();
    }

    return message.transaction_type_error;
  }
}

module.exports = CommissionManager;
