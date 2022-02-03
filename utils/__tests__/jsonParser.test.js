const {jsonParser} = require('..');

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

describe('parse json data into javascript object', () => {
  test('should return correct json data', () => {
    const input = JSON.stringify(data);

    expect(jsonParser(input)).toStrictEqual(data);
  });

  test('should return null, if json format is not corrent', () => {
    expect(jsonParser('')).toBeNull();
  });
});
