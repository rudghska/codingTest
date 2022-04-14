function mySolution(str, c) {
  let count = 0;

  for (const s of str) {
    if (s === c) {
      count++;
    }
  }

  return count;
}

function solution1(str, c) {
  return str.split(c).length - 1;
}

console.log(mySolution('COMPUTERPROGRAMMING', 'R'));
console.log(solution1('COMPUTERPROGRAMMING', 'R'));
