function mySolution(arr) {
  let answer = 0;
  let length = arr.length - 1;
  let cur;
  for (let i = 1; i < length; i++) {
    for (let j = 1; j < length; j++) {
      cur = arr[i][j];
      if (
        cur >= arr[i][j - 1] &&
        cur >= arr[i - 1][j] &&
        cur >= arr[i][j + 1] &&
        cur >= arr[i + 1][j]
      ) {
        answer++;
      }
    }
  }

  return answer;
}

function solution(arr) {
  let answer = 0;
  let length = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (nx >= 0 && nx < length && ny >= 0 && ny < length && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

mySolution([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 5, 3, 7, 2, 3, 0],
  [0, 3, 7, 1, 6, 1, 0],
  [0, 7, 2, 5, 3, 4, 0],
  [0, 4, 3, 6, 4, 1, 0],
  [0, 8, 7, 3, 5, 2, 0],
  [0, 0, 0, 0, 0, 0, 0],
]);

solution([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);
