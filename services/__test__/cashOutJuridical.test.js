const mockAxios = require('axios');
const {CashOutJuridical} = require('..');

const config = {
  type: 'cash_out_juridical',
  percents: 0.3,
  min: {amount: 0.5, currency: 'EUR'},
};

describe('cash in API service', () => {
  const cashOutJuridical = new CashOutJuridical();

  test('should return correct config data for cash in transaction', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(config));
    expect(await cashOutJuridical.getConfig()).toEqual(config);
  });

  test('should return only config type name for cash in transaction', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.reject(new Error()));
    expect(await cashOutJuridical.getConfig()).toEqual({type: config.type});
  });
});
