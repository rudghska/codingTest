function solution(a, b) {
  return [gcd(a, b), lcm(a, b)];
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
