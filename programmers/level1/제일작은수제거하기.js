function solution(numbers) {
  if (numbers.length === 1) {
    numbers[0] = -1;
    return numbers;
  }
  const min = Math.min(...numbers);
  return numbers.filter(number => number > min);
}
