function solution(a, b) {
  return new Date(`${a} ${b} ${2016}`).toString().split(' ')[0].toLocaleUpperCase();
}
