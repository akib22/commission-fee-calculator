const {ceilAndConvertToEuro} = require('..');

const data = [
  {
    input: 6,
    output: '0.06',
  },

  {
    input: 90,
    output: '0.90',
  },

  {
    input: 8700,
    output: '87.00',
  },
  {
    input: 500,
    output: '5.00',
  },
  {
    input: 550,
    output: '5.50',
  },
];

describe('ceil the cents value and convert to euro', () => {
  data.forEach(item => {
    test(`should return ${item.output} for the input ${item.input}`, () => {
      expect(ceilAndConvertToEuro(item.input)).toBe(item.output);
    });
  });
});
