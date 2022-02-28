function solution(s) {
  let i = 0;
  return s
    .split('')
    .map(w => {
      if (w === ' ') {
        i = 0;
        return ' ';
      }
      i % 2 === 0 ? (w = w.toUpperCase()) : (w = w.toLowerCase());
      i++;
      return w;
    })
    .join('');
}
// 답은 맞았는데 자꾸 틀려서 찾아보니
// 홀수 순서일 때는 소문자로 바꿔주라고 함..
