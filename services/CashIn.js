const Service = require('./Service');

class CashIn extends Service {
  constructor() {
    const apiEndPoint = 'cash-in';
    super(apiEndPoint);
  }
}

module.exports = CashIn;
