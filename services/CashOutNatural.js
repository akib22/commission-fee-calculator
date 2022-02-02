const Service = require('./Service');
const {transactionTypes} = require('../constants');

class CashOutNatural extends Service {
  constructor() {
    const apiEndPoint = 'cash-out-natural';
    super(apiEndPoint);
  }

  async getConfig() {
    const [config, error] = await this.get();

    if (error) {
      return {
        type: transactionTypes.CASH_OUT_NATURAL,
      };
    }

    return {
      type: transactionTypes.CASH_OUT_NATURAL,
      ...config,
    };
  }
}

module.exports = CashOutNatural;
