const {convertToCents} = require('..');

const data = [
  {
    input: 6,
    output: 600,
  },

  {
    input: 90,
    output: 9000,
  },

  {
    input: 8700,
    output: 870000,
  },
  {
    input: 0.5,
    output: 50,
  },
  {
    input: 0.23,
    output: 23,
  },
];

describe('convert euro to cents', () => {
  data.forEach(item => {
    test(`should return ${item.output} for the input ${item.input}`, () => {
      expect(convertToCents(item.input)).toBe(item.output);
    });
  });
});
