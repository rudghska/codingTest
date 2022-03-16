function solution(a, c) {
  let result = [];

  for (let i = 0; i < c.length; i++) {
    result[i] = a.slice(c[i][0] - 1, c[i][1]).sort((a, b) => a - b)[
      c[i][2] === 1 ? 0 : c[i][2] - 1
    ];
  }
  return result;
}
