function sum(a, b) {

    if(Number.isFinite(a) && Number.isFinite(b)){
      return a + b
    }
        
    throw new TypeError(`isn't correct arguments`);
  
}

module.exports = sum;
