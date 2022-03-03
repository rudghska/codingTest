const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
  let s2 = s;
  let s3;
  let i = 0;
  while (i < numbers.length) {
    s3 = s2;
    s2 = s2.replace(numbers[i], i);
    s2 !== s3 ? (i = 0) : i++;
  }

  return parseInt(s2);
}
