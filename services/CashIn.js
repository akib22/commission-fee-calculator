const Service = require('./Service');
const {transactionTypes} = require('../constants');

class CashIn extends Service {
  constructor() {
    const apiEndPoint = 'cash-in';
    super(apiEndPoint);
  }

  async getConfig() {
    const [config, error] = await this.get();

    if (error) {
      return {
        type: transactionTypes.CASH_IN,
      };
    }

    return {
      type: transactionTypes.CASH_IN,
      ...config,
    };
  }
}

module.exports = CashIn;
