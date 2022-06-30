function solution(s) {
  return s
    .split('')
    .map(w => w.charCodeAt())
    .sort((a, b) => b - a)
    .map(w => String.fromCharCode(w))
    .join('');
}
