function solution(n) {
  const sq = Math.trunc(Math.sqrt(n));
  return sq * sq === n ? Math.pow(sq + 1, 2) : -1;
}
