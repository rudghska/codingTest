function solution(x) {
  return x % ('' + x).split('').reduce((a, b) => a + parseInt(b), 0) === 0 ? true : false;
}
