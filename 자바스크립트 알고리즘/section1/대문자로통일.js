function mySolution(str) {
  return str.toUpperCase();
}
function solution(str) {
  let answer = '';

  for (const c of str) {
    let codeNumber = c.charCodeAt();

    if (c === c.toUpperCase()) {
      answer += c;
    } else {
      answer += String.fromCharCode(codeNumber - 32);
    }
    String.fromCodePoint;
  }

  return answer;
}

console.log(mySolution('ItisTimeToStudy'));
console.log(solution('ItisTimeToStudy'));
