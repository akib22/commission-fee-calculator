const CommissionManager = require('../CommissionManager');
const {configs, transitionList} = require('./mock-data');

describe('commission manger', () => {
  const commissionManager = new CommissionManager(configs);

  transitionList.forEach(transition => {
    test(`should return output ${transition.result} for user ${transition.user_id}, ${transition.user_type} ${transition.type}`, () => {
      expect(commissionManager.getCommission(transition)).toBe(
        transition.result
      );
    });
  });
});
