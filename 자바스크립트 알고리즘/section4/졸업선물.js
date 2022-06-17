function solution(m, arr) {
  let n = 1;
  let sum = 0;
  let max = [];
  let answer;
  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][0] / 2 + arr[i][1];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && sum < m) {
        sum += arr[j][0] + arr[j][1];
        n++;
      }
    }

    max.push(n);
    sum = 0;
    n = 0;
  }

  max.sort((a, b) => a - b);
  answer = max[max.length - 1];
  return answer;
}

solution(28, [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
]);
