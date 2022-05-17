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

mySolution('KKHSSSSSSSE');
