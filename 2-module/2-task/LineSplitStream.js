const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
     this.result = '';
  }

  _transform(chunk, encoding, callback) {
    this.result += chunk.toString();
    
    callback();
  }

  _flush(callback) {
    this.result
        .split(os.EOL) 
        .map(i => { this.push(i); });
    
    callback();
  }
}

module.exports = LineSplitStream;
