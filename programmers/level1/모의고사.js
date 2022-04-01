function solution(answers) {
  let result = [];
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === supo1[i % 5]) {
      score[0]++;
    }
    if (answers[i] === supo2[i % 8]) {
      score[1]++;
    }
    if (answers[i] === supo3[i % 10]) {
      score[2]++;
    }
  }

  const max = score.reduce((a, b) => Math.max(a, b));

  if (score[0] === max) result.push(1);
  if (score[1] === max) result.push(2);
  if (score[2] === max) result.push(3);

  return result;
}
