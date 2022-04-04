function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function solution2(n) {
  const result = (n + n * n) / 2;
  return result;
}

console.log(solution(6));
console.log(solution(10));
console.log(solution2(6));
console.log(solution2(10));
console.log(solution2(7));
