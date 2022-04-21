function mySolution(word) {
  let answer = '';
  let wordL = word.length;

  if (wordL % 2 == 1) {
    answer = word[Math.floor(wordL / 2)];
  } else {
    answer += word[Math.floor(wordL / 2) - 1];
    answer += word[Math.floor(wordL / 2)];
  }

  return answer;
}

function solution(word) {
  let answer;
  const mid = Math.floor(word.length / 2);

  if (word.length % 2 === 1) {
    answer = word.substring(mid, mid + 1); // mid + 1 전까지 문자를 자른다
    // word.substr(mid, 1);
  } else {
    // answer = word.substring(mid - 1, mid + 1);
    answer = word.substr(mid - 1, 2);
  }

  return answer;
}

console.log(mySolution('study'));
console.log(mySolution('abcdefg'));
console.log(mySolution('12345674'));
console.log(mySolution('good'));
console.log(mySolution('123456'));

console.log(solution('studyy'));
