function sum(a, b) {
  try {
    if(Number.isFinite(a) && Number.isFinite(b)){
      return a + b
    }
    else{
      throw new typeError
    }
  } catch{
      return 'typeError';
  }
}

module.exports = sum;
