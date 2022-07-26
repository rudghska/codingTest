function solution(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push((fibonacci[0] + fibonacci[1]) % 1234567);
    fibonacci.shift();
  }

  const answer = fibonacci[1];
  return answer;
}
