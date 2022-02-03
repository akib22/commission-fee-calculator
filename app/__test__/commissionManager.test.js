const CommissionManager = require('../CommissionManager');
const {configs, transitionList} = require('./mock-data');

describe('commission manger', () => {
  const commissionManager = new CommissionManager(configs);

  transitionList.forEach(transition => {
    test(`should return output ${transition.result}`, () => {
      expect(commissionManager.getCommission(transition)).toBe(
        transition.result
      );
    });
  });
});
