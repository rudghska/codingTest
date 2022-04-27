function solution(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    result.push(a[i] - b[i]);
  }

  return result.map(n => {
    switch (n) {
      case 1:
      case -2:
        return 'A';
      case 2:
      case -1:
        return 'B';
      case 0:
        return 'D';
    }
  });
}

solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
solution([2, 1, 2, 3, 1], [2, 2, 1, 3, 2]);
