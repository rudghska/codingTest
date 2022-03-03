function mySolution(s, n) {
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

function solution(s, n) {
  return s.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
}

// 문자열 index로 접근하는건 알았는데, 접근한 index data로 비교해서 정렬 되는지 몰랐다...
// localeCompare
// a.localeCompare(b) a < b -> -1
// a.localeCompare(b) a > b -> 1
// a.localeCompare(b) a == b -> 0
