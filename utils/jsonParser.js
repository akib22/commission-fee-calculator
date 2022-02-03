function jsonParser(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

module.exports = {jsonParser};
