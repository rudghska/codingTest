function solution(price, money, count) {
  let sum = 0;
  let i = 0;
  for (; i < count; i++) {
    sum += price * (i + 1);
  }
  return money - sum > 0 ? 0 : sum - money;
}
