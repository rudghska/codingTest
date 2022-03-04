function solution(s, n) {
  return s
    .split('')
    .map(a => a.charCodeAt())
    .map(a => {
      if (a === 32) return a;
      if (a > 96 && a < 123 && a + n > 122) {
        return a + n - 122 + 96;
      } else if (a > 64 && a < 91 && a + n > 90) {
        console.log(a + n - 89);
        return a + n - 90 + 64;
      }
      return a + n;
    })
    .map(a => String.fromCharCode(a))
    .join('');
}
