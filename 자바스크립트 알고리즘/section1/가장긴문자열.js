function mySolution(words) {
  let maxWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
      maxWord = words[i];
    }
  }

  return maxWord;
}

function solution(words) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (const w of words) {
    if (w.length > max) {
      max = w.length;
      answer = w;
    }
  }

  return answer;
}

console.log(mySolution(['teacher', 'time', 'student', 'beautiful', 'good']));
console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
