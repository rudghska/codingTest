//   function solution(n1, n2, n3) {
//     return Math.min(n1, n2, n3);
//   }

function solution(nums) {
  let minNum;
  minNum = nums[0 + 1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
  }

  return minNum;
}

//강의 답
function solution2(n1, n2, n3) {
  let answer;
  if (n1 > n2) {
    answer = n2;
  }
  if (answer > n3) {
    answer = n3;
  }

  return answer;
}

console.log(solution([6, 5, 11, 2, 1]));
console.log(solution2(6, 5, 11));
