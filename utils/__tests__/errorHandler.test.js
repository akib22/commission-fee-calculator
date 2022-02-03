const {ErrorHandler} = require('..');

const errorHandler = new ErrorHandler();

const SUCCESS = 'success';
const ERROR = 'error';

describe('error handler', () => {
  test('should return array of result and error. If success, error will null', async () => {
    const [response, error] = await errorHandler.asyncError(
      Promise.resolve(SUCCESS)
    );

    expect(response).toBe(SUCCESS);
    expect(error).toBeNull();
  });

  test('should return array of result and error. If fail, error will return', async () => {
    const [response, error] = await errorHandler.asyncError(
      Promise.reject(ERROR)
    );

    expect(response).toBeNull();
    expect(error).toBe(ERROR);
  });
});
