function solution(arr) {
  //   const result =
  //     arr.reduce((sum, b, i) => {
  //       if (b === 0) point = 0;

  //       if (b === 1 && arr[i + 1] === 1) {
  //         point++;
  //         sumPoint += point;
  //       }

  //       return sum + b;
  //     }, 0) + sumPoint;

  //   let point = 0;
  //   let sum = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];

  //     if (arr[i + 1] === 1) {
  //       sum += point++;
  //     } else {
  //       point = 0;
  //     }
  //   }
  let point = 0;
  let sum = 0;

  for (const num of arr) {
    if (num === 1) {
      point += 1;
      sum += point;
    } else {
      point = 0;
    }
  }
  return sum;
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
