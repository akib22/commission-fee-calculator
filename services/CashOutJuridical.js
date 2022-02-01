const Service = require('./Service');

class CashOutJuridical extends Service {
  constructor() {
    const apiEndPoint = 'cash-out-juridical';
    super(apiEndPoint);
  }
}

module.exports = CashOutJuridical;
