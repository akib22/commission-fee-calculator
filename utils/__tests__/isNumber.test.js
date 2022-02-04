const {isNumber} = require('..');

describe('is number', () => {
  test('should return value is a valid number or not', () => {
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber(-1)).toBeTruthy();
    expect(isNumber(1999999)).toBeTruthy();
    expect(isNumber(0.423)).toBeTruthy();
    expect(isNumber(0.00004)).toBeTruthy();
    expect(isNumber(0.00000005)).toBeTruthy();
    expect(isNumber(-0.00000005)).toBeTruthy();
    expect(isNumber(99999999999)).toBeTruthy();
    expect(isNumber(-99999999999)).toBeTruthy();

    expect(isNumber(Infinity)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber('')).toBeFalsy();
    expect(isNumber('3123')).toBeFalsy();
  });
});
