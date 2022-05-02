function mySolution1(score) {
  const copyScore = score.slice();
  const answer = [];
  let index;

  copyScore.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    if (score[i] === score[i - 1]) {
      answer[i] = index + 1;
    } else {
      index = copyScore.indexOf(score[i]);
      answer[i] = index + 1;
    }
  }

  return answer;
}

function mySolution2(arr) {
  const answer = [];
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count++;
      }
    }
    answer[i] = count;
    count = 1;
  }

  return answer;
}

mySolution1([87, 89, 92, 100, 100, 100, 76]);
mySolution2([87, 89, 92, 100, 100, 100, 76]);
