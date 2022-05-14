function mySolution(str, c) {
  let charIndex = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      charIndex.push(i);
    }
  }

  let result = [];
  let min = 1;
  let cur;

  for (let i = 0; i < str.length; i++) {
    min = Math.abs(charIndex[0] - i);

    for (let j = 1; j < charIndex.length; j++) {
      cur = Math.abs(charIndex[j] - i);
      if (cur <= min) {
        min = cur;
      }
    }
    result.push(min);
  }

  return result;
}

function solution(str, t) {
  let p = 100;
  let answer = [];
  for (const c of str) {
    if (c === t) {
      p = 0;
      answer.push(p);
    } else {
      answer.push(++p);
    }
  }

  p = 100;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) {
      p = 0;
    } else {
      answer[i] = Math.min(answer[i], ++p);
    }
  }

  return answer;
}
