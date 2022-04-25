function mySolution(word) {
  const answer = word.split('');

  for (let i = 0; i < answer.length; i++) {
    for (let j = 1; j < answer.length; j++) {
      if (answer[0] == answer[j]) {
        answer.splice(0, 1);
        j = answer.length;
      }
    }
  }
  return answer.join('');
}

function solution(word) {
  let answer = '';

  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === i) answer += word[i];
  }

  return answer;
}
