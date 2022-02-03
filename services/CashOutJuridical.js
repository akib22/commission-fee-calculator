const Service = require('./Service');
const {transactionTypes} = require('../constants');

class CashOutJuridical extends Service {
  constructor() {
    const apiEndPoint = 'cash-out-juridical';
    super(apiEndPoint);
  }

  async getConfig() {
    const [config, error] = await this.get();

    if (error) {
      return {
        type: transactionTypes.CASH_OUT_JURIDICAL,
      };
    }

    return {
      type: transactionTypes.CASH_OUT_JURIDICAL,
      ...config,
    };
  }
}

module.exports = CashOutJuridical;
