const mockAxios = require('axios');
const {CashOutNatural} = require('..');

const config = {
  type: 'cash_out_natural',
  percents: 0.3,
  week_limit: {amount: 1000, currency: 'EUR'},
};

describe('cash in API service', () => {
  const cashOutNatural = new CashOutNatural();

  test('should return correct config data for cash in transaction', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(config));
    expect(await cashOutNatural.getConfig()).toEqual(config);
  });

  test('should return only config type name for cash in transaction', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    expect(await cashOutNatural.getConfig()).toEqual({type: config.type});
  });
});
