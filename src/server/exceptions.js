const mongoose = require('mongoose');
const mongodb = require('mongodb');

class ValidationError extends Error {
  _errors;
  static mongoHandledCodes = [11000];

  constructor(message, errors) {
    super(message);
    if (!(errors instanceof Array))
      throw new TypeError("'errors' should be an Array");
    this._errors = errors;
    this.name = this.constructor.name;
  }

  toJSON() {
    return {
      error: 'ValidationError',
      message: this.message,
      errors: this._errors
    };
  }

  static fromMongooseValidationError(err) {
    if (!(err instanceof mongoose.Error.ValidationError))
      throw new TypeError('Parameter should be of type ValidationError');

    let errors = [];
    for (let errKey in err.errors) {
      errors.push({
        path: err.errors[errKey].path,
        kind: err.errors[errKey].kind,
        value: err.errors[errKey].value
      });
    }
    return new ValidationError(err.message, errors);
  }

  static fromMongoServerError(err) {
    if (!(err instanceof mongodb.MongoServerError))
      throw new TypeError('Parameter should be of type MongoServerError');
    if (!this.mongoHandledCodes.includes(err.code))
      throw new RangeError(`Error with code ${err.code} cannot be handled`);

    let errors = [];
    for (let key in err.keyValue) {
      errors.push({
        path: key,
        kind: 'duplicate',
        value: err.keyValue[key]
      });
    }
    return new ValidationError(err.message, errors);
  }
}

module.exports = {
  ValidationError
};
