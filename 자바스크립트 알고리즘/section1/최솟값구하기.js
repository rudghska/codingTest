function solution(nums) {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }

  return min;
}

function solution2(nums) {
  //Math.min.apply(null, nums);
  return Math.min(...nums);
}

console.log(solution([5, 3, 7, 11, 2, 15, 17, 1]));
