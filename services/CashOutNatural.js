const Service = require('./Service');

class CashOutNatural extends Service {
  constructor() {
    const apiEndPoint = 'cash-out-natural';
    super(apiEndPoint);
  }
}

module.exports = CashOutNatural;
