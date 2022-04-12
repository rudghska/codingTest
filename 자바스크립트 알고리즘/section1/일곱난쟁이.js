function solution(nums) {
  let sum = 0;
  let nums2 = nums.map(num => num);
  let result;

  while (sum !== 100) {
    result = nums2.filter(num => {
      if (sum + num <= 100) {
        sum += num;
        return num;
      }
    });

    if (sum !== 100) {
      sum = 0;
      result.pop();
      nums2 = result.map(num => num);
      let sliceArr = nums.slice(nums2.length + 1);
      for (const num of sliceArr) {
        nums2.push(num);
      }
    }
  }
  return result;
}

function solution2(nums) {
  let answer = nums;
  let sum = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (sum - (nums[i] + nums[j]) === 100) {
        nums.splice(j, 1);
        nums.splice(i, 1);
      }
    }
  }
  return answer;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
console.log(solution2([20, 7, 23, 19, 10, 15, 25, 8, 13]));
