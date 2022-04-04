function solution(a, b, c) {
  const arr = [a, b, c];
  const max = Math.max(...arr);

  const ab = arr.filter(n => max !== n).reduce((a, b) => a + b, 0);

  if (max < ab) {
    return 'Yes';
  } else {
    return 'No';
  }
}

function solution2(a, b, c) {
  let answer = 'Yes',
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max >= max) return answer;
  else return (answer = 'No');
}

console.log(solution2(6, 7, 11));
console.log(solution2(13, 33, 17));
