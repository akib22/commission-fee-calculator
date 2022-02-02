require('dotenv').config();

const {readFile} = require('fs');
const {resolve} = require('path');
const {jsonParser} = require('./utils/jsonParser');
const {CaseIn, CashOutJuridical, CashOutNatural} = require('./services');
const CommissionManager = require('./app/CommissionManager');

readFile(
  resolve(process.argv[2] || ''),
  {encoding: 'utf8'},
  (err, transactions) => {
    if (err) {
      process.stderr.write('input file error\n');
      process.exit(1);
    }

    const parsedTransactions = jsonParser(transactions);

    if (!parsedTransactions) {
      process.stderr.write('json format not correct\n');
      process.exit(1);
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
        console.log(commission.toFixed(2));
      });
    });
  }
);
