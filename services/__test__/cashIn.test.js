const mockAxios = require('axios');
const {CashIn} = require('..');

const config = {
  type: 'cash_in',
  percents: 0.03,
  max: {amount: 5, currency: 'EUR'},
};

describe('cash in API service', () => {
  const cashIn = new CashIn();

  test('should return correct config data for cash in transaction', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(config));
    expect(await cashIn.getConfig()).toEqual(config);
  });

  test('should return only config type name for cash in transaction', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    expect(await cashIn.getConfig()).toEqual({type: config.type});
  });
});
