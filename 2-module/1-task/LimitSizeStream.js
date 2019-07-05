const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.limit = options.limit
    this.sum = 0;
  }

  _transform(chunk, encoding, callback) {
    this.sum += Buffer.byteLength(chunk);

    if (this.sum > this.limit) {
      callback(new LimitExceededError());
    }

    callback(null, chunk);
  }
}

module.exports = LimitSizeStream;
