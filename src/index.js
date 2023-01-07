module.exports = function reverse (n) {
  let numberToStr = Math.abs(n).toString();
  let result = '';
  let i = numberToStr.length - 1;

  for( i; i >= 0; i -= 1 ){
    result += numberToStr[i];
  }

  return result;
}
