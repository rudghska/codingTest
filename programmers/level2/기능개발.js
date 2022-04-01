function solution(progresses, speeds) {
  const result = [];
  let arr = [];
  const days = progresses.map((prog, i) => Math.ceil((100 - prog) / speeds[i]));

  arr.push(days.shift());
  while (days.length) {
    if (arr[0] >= days[0]) {
      arr.push(days[0]);
      days.shift();
      if (days.length == 0) {
        result.push(arr.length);
      }
    } else {
      result.push(arr.length);
      arr = [];
      if (days.length == 1) {
        result.push(days.length);
        days.shift();
      } else {
        arr.push(days.shift());
      }
    }
  }
  return result;
}
