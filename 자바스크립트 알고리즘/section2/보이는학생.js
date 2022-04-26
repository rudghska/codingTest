function solution(arr) {
  let count = 1;
  let maxTall = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxTall < arr[i + 1]) {
      count++;
      maxTall = arr[i + 1];
    }
  }

  return count;
}

solution([130, 135, 148, 140, 145, 150, 150, 153]);
