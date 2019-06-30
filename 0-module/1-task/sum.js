function sum(a, b) {

  if(Number.isFinite(a) && Number.isFinite(b)){
    return a + b
  }
  
  throw new TypeError(`is't `);

}

module.exports = sum;