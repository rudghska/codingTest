function mySolution(str) {
  let count = 1;
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    if (count == 1) {
      answer += str[i];
    }

    if (str[i] == str[i + 1]) {
      count++;
    } else {
      if (count == 1) {
        answer += '';
      } else {
        answer += count;
        count = 1;
      }
    }
  }

  return answer;
}

function solution(str) {
  let count = 1;
  let answer = '';

  str = str + ' ';

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }

  console.log(answer);
  return answer;
}

mySolution('KKHSSSSSSSE');
solution('KKHSSSSSSSE');
