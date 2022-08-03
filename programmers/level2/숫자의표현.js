function solution(n) {
  let i = 1;
  let sum = 0;
  let count = 0;
  let startNumber = 1;
  while (true) {
    sum += i;
    if (sum === n) {
      count++;
      sum = 0;
      i = ++startNumber;
    } else if (sum > n) {
      i = count;
      sum = 0;
      i = ++startNumber;
    }
    if (startNumber === n) {
      break;
    }
    i++;
  }

  return count;
}
