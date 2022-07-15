function solution(dartResult) {
  let score = [];
  let n = 0;
  let p = 0;
  const resultArr = dartResult.split('');

  for (let i = 0; i < resultArr.length; i++) {
    switch (resultArr[i]) {
      case 'S':
        score[p] **= 1;
        break;
      case 'D':
        score[p] **= 2;
        break;
      case 'T':
        score[p] **= 3;
        break;
      case '*':
        score = score.map((s, i) => (i === 0 && n > 2 ? s : s * 2));
        break;
      case '#':
        score[p] *= -1;
        break;
      default:
        p = n;
        if (!isNaN(resultArr[i + 1])) {
          score[n++] = (resultArr[i] + resultArr[i + 1]) * 1;
          i++;
        } else {
          score[n++] = resultArr[i] * 1;
        }
        break;
    }
  }

  return score.reduce((a, b) => a + b, 0);
}
