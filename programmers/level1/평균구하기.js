function solution(arr) {
  return (
    arr.reduce((a, b) => {
      return a + b;
    }, 0) / arr.length
  );
}
