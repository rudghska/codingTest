function solution(s, n) {
  return s.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a < b) return -1;
      if (a > b) return 1;
      else return 0;
    } else {
      if (a[n] < b[n]) return -1;
      if (a[n] > b[n]) return 1;
    }
  });
}
