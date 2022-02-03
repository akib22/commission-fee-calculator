const {ErrorHandler, request} = require('../utils');

class Service extends ErrorHandler {
  constructor(apiEndPoint) {
    super();
    this.apiEndPoint = apiEndPoint;
  }

  get() {
    return this.asyncError(request.get(this.apiEndPoint));
  }
}

module.exports = Service;
