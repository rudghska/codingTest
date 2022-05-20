function solution(num1, num2) {
  let str = '';
  for (let i = 0; i < num2; i++) {
    for (let j = 0; j < num1; j++) {
      str = str + '*';
    }
    str += '\n';
  }

  return str;
}

solution(5, 3);
