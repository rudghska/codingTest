function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
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

    if (isPrime(pNum)) {
      answer.push(pNum);
    }
  }

  return answer;
}

function solution(arr) {
  let answer = [];
  let t;
  for (let x of arr) {
    let res = 0;

    while (x) {
      t %= 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

mySolution([32, 55, 62, 20, 250, 370, 200, 30, 100]);
solution([21, 33, 32, 55, 62, 20, 250, 370, 200, 30, 100]);
