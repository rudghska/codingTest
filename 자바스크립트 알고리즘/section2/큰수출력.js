function solution(nums) {
  const result = [];
  result.push(nums[0]);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      result.push(nums[i + 1]);
    }
  }

  return result;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
