function solution(n) {
  let result = [];
  let r = 0;
  let q = 0;
  while (n > 0) {
    q = parseInt(n / 3);
    r = n % 3;
    if (r == 0) {
      result.push(4);
      n = q -= 1;
    } else {
      result.push(r);
      n = q;
    }
  }
  return result.reverse().join('');
}
