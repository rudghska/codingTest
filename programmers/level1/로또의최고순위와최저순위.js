function solution(lottos, win_nums) {
  const rank = [6, 5, 4, 3, 2, 1];
  const hl = [];
  let count = 0;

  let knowNum = lottos.filter(lotto => lotto !== 0);
  if (knowNum.length === 0) {
    return [1, 6];
  }

  win_nums.forEach(num => {
    if (knowNum.includes(num)) {
      count++;
    }
  });

  if (count === 0) {
    return [6, 6];
  }

  hl.push(rank[count + lottos.length - knowNum.length - 1]);
  hl.push(rank[count - 1]);

  return hl;
}
