require('dotenv').config();

const {readFile} = require('fs');
const {resolve} = require('path');
const {
  jsonParser,
  terminalLog,
  error,
  ceilAndConvertToEuro,
} = require('./utils');
const {message} = require('./constants');
const {CaseIn, CashOutJuridical, CashOutNatural} = require('./services');
const CommissionManager = require('./app/CommissionManager');

readFile(
  resolve(process.argv[2] || ''),
  {encoding: 'utf8'},
  (err, transactions) => {
    if (err) {
      error(message.input_file_error);
    }

    const parsedTransactions = jsonParser(transactions);

    if (!parsedTransactions) {
      error(message.json_format_error);
    }

    // fetch commission fee's configurations
    Promise.all([
      new CaseIn().getConfig(),
      new CashOutJuridical().getConfig(),
      new CashOutNatural().getConfig(),
    ]).then(configs => {
      const commissionManager = new CommissionManager(configs);

      parsedTransactions?.forEach(transaction => {
        const commission = commissionManager.getCommission(transaction);

        if (typeof commission === 'number') {
          terminalLog(ceilAndConvertToEuro(commission));
        } else {
          terminalLog(commission);
        }
      });
    });
  }
);
