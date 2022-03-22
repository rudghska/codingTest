function solution(n) {
  let r = [];
  let i;
  let result = 0;
  while (n > 0) {
    r.push(n % 3);
    n = parseInt(n / 3);
  }

  i = r.length - 1;
  for (const a of r) {
    result += Math.pow(3, i--) * a;
  }
  return result;
}
