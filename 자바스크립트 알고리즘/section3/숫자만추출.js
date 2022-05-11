function solution(str) {
  let result = '';

  for (const c of str) {
    if (!isNaN(c)) result += c;
  }

  return parseInt(result);
}

solution('g0en2T0s8eSoft');
