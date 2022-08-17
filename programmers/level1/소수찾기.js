function solution(n) {
  const arr = [];

  for (let i = 0; i < n + 1; i++) {
    arr[i] = i;
  }
  for (let i = 2; i * i < n; i++) {
    if (arr[i] !== 0) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = 0;
      }
    }
  }
  return arr.filter(ar => ar !== 0).slice(1, arr.length).length;
}
