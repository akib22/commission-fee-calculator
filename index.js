require('dotenv').config();

const {CaseIn, CashOutJuridical, CashOutNatural} = require('./services');

Promise.all([
  new CaseIn().get(),
  new CashOutJuridical().get(),
  new CashOutNatural().get(),
]).then(result => {
  console.log(result);
});
