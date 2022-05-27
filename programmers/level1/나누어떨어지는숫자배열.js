function solution(numbers, divisor) {
  const result = numbers.filter(number => number % divisor === 0).sort((a, b) => a - b);
  if (result.length === 0) {
    result.push(-1);
  }
  return result;
}
