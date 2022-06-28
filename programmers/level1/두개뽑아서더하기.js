function solution(nums) {
  const arr = [];
  nums.map((n, index) => {
    for (let i = 0; i < nums.length; i++) {
      if (index == i) continue;
      arr.push(n + nums[i]);
    }
  });

  const set = new Set(arr);
  console.log(set);
  return [...set].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
