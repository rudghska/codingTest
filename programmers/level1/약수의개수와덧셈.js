function solution(left, right) {
  let divisor = [];
  let sum = 0;
  for (let i = left; i < right + 1; i++) {
    divisor = [];
    for (let j = 0; j < i + 1; j++) {
      if (i % j === 0) divisor.push(i);
    }
    divisor.length % 2 === 0 ? (sum += i) : (sum -= i);
  }
  return sum;
}
