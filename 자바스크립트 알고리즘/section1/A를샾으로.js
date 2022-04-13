function mySolution(str) {
  return str
    .split('')
    .map(s => (s === 'A' ? '#' : s))
    .join('');
}

function solution1(str) {
  let result = '';

  for (const s of str) {
    if (s === 'A') {
      result += '#';
    } else {
      result += s;
    }
  }
  return result;
}

function solution2(str) {
  // str.replaceAll('A', '#');

  return str.replace(/A/g, '#');
}

console.log(mySolution('BANANA'));
console.log(solution1('BANANA'));
