function primeNumber(num) {
  if (num === 1) return false;

  const result = [];

  for (let i = 2; i < num + 1; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }

  if (result.length === 1) {
    return true;
  }
}

function mySolution(arr) {
  let answer = [];
  let q;
  let pNum;
  for (let n of arr) {
    q = n;

    while (q % 10 === 0) {
      q /= 10;
    }

    pNum = (q + '').split('').reverse().join('') * 1;

    if (primeNumber(pNum)) {
      answer.push(pNum);
    }
  }

  return answer;
}

mySolution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
