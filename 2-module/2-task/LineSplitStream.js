const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.utf = options.encoding
    this.result = '';
  }

  _transform(chunk, encoding, callback) {
    this.result += chunk;
    callback(null, chunk)
  }

  _flush(callback) {
  }
}

module.exports = LineSplitStream;
