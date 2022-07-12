function solution(s) {
  const length = s.replace(/[^0-9]/g, '').length;
  return (length === 6 && s.length === 6) || (length === 4 && s.length === 4) ? true : false;
}
