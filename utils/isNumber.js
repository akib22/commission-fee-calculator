const isNumber = value => {
  return typeof value === 'number' && Number.isFinite(value);
};

module.exports = isNumber;
