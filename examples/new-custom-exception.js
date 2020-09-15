const { CustomException } = require('custom-exception');

class MyCustomException extends CustomException {
  constructor(message) {
    this.defaultMessage = 'This is my custom exception.';
    super(message);
  }
}

module.exports = MyCustomException;
