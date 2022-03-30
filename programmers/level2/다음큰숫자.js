function oneLength(n) {
  return n
    .toString(2)
    .split('')
    .filter(n => n == 1).length;
}

function solution(n) {
  let a = oneLength(n);
  let b = oneLength(n + 1);
  let i = 2;
  let result = n + 1;

  while (a !== b) {
    result = n + i;
    b = oneLength(n + i);
    i++;
  }
  return result;
}
