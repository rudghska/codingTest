function solution(n) {
  let arr = '';
  for (let i = 1; i < n + 1; i++) {
    i % 2 === 1 ? (arr += '수') : (arr += '박');
  }
  return arr;
}
