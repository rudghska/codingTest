function solution(priorities, location) {
  let count = 0;

  while (priorities.length) {
    if (priorities[0] < Math.max(...priorities)) {
      if (--location < 0) location = priorities.length - 1;
      priorities.push(priorities.shift());
    } else {
      count++;
      if (--location < 0) return count;
      priorities.shift();
    }
  }
}
