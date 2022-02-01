const request = require('../utils/request');
const ErrorHandler = require('../utils/ErrorHandler');

class Service extends ErrorHandler {
  constructor(apiEndPoint) {
    super();
    this.apiEndPoint = apiEndPoint;
  }

  get(params) {
    return this.asyncError(
      request({
        url: this.apiEndPoint,
        method: 'get',
        params,
      })
    );
  }
}

module.exports = Service;
