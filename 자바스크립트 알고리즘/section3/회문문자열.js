function mySolution1(str) {
  const result = str.split('').reverse().join('');
  const answer = result.toLowerCase() === str.toLowerCase() ? 'YES' : 'NO';
  return answer;
}

function mySolution2(str) {
  const length = str.length;
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = str[length - i - 1];
  }

  const answer = result.join('').toLowerCase() === str.toLowerCase() ? 'YES' : 'NO';
}

mySolution1('gooG');
mySolution2('gooG');
mySolution2('zzaa');
