function solution(n) {
  let count = 0;
  while (n !== 1) {
    n % 2 === 0 ? (n /= 2) : (n = n * 3 + 1);
    count++;
    if (count > 500) return (count = -1);
  }
  return count;
}
