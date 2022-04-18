function mySolution(str) {
  let answer = '';

  for (const c of str) {
    if (c === c.toUpperCase()) {
      answer += c.toLowerCase();
    } else {
      answer += c.toUpperCase();
    }
  }

  return study;
}

console.log(mySolution('sTuDy'));
