function solution(a, b) {
  if (a == b) return a;
  let sum = 0;
  for (let i = Math.min(a, b); i < Math.max(a, b) + 1; i++) {
    sum += i;
  }
  return sum;
}
