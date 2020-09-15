const { BadRequest } = require('custom-exception');

if (arguments.notReceived) {
  throw new BadRequest('Please pass correct argument');
}
