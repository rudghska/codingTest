function mySolution(str, c) {
  let charIndex = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === c) {
      charIndex.push(i);
    }
  }

  let result = [];
  let min = 1;
  let cur;

  for (let i = 0; i < str.length; i++) {
    min = Math.abs(charIndex[0] - i);

    for (let j = 1; j < charIndex.length; j++) {
      cur = Math.abs(charIndex[j] - i);
      if (cur <= min) {
        min = cur;
      }
    }
    result.push(min);
  }

  return result;
}

solution('teachermode', 'e');
