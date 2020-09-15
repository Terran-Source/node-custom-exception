const chai = require('chai');

before(() => {
  // global arrange
  this.CustomException = require('../app').default;
});

beforeEach(() => {
  // global reset
  this.CustomException = require('../app').default;
});

afterEach(() => {
  // global reset
  delete this.CustomException;
});
