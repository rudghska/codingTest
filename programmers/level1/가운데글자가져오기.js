function solution(s) {
  const arr = s.split('');
  const length = arr.length;
  return length % 2 == 1 ? arr[Math.floor(length / 2)] : arr[length / 2 - 1] + arr[length / 2];
}
