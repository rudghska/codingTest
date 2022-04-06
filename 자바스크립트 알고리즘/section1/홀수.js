function solution(nums) {
  const odds = nums.filter(num => num % 2 !== 0);
  const sum = odds.reduce((a, b) => a + b, 0);
  const min = Math.min(...odds);

  return `홀수 합 : ${sum}, 홀수 중 제일 작은 수 : ${min}`;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
