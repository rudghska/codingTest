function solution(day, carNums) {
  return carNums.filter(carNum => {
    if (carNum % 10 === day) {
      return carNum;
    }
  }).length;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
