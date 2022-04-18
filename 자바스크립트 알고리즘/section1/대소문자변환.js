function mySolution(str) {
  let answer = '';

  for (const c of str) {
    if (c === c.toUpperCase()) {
      answer += c.toLowerCase();
    } else {
      answer += c.toUpperCase();
    }
  }
}

console.log(mySolution('sTuDy'));
