function solution(a, b) {
  return a.map((num, i) => num * b[i]).reduce((a, b) => a + b, 0);
}
