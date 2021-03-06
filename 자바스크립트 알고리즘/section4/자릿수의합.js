function mySolution(nums) {
  let max = 0,
    curMax = 0,
    maxNum = 0,
    curMaxNum = 0,
    number,
    result;

  for (let i = 0; i < nums.length; i++) {
    number = nums[i] + '';
    for (let j = 0; j < number.length; j++) {
      curMax += number[j] * 1;
    }

    curMaxNum = nums[i];

    if (curMax > max) {
      max = curMax;
      maxNum = curMaxNum;
      result = curMaxNum;
    } else if (i > 0 && curMax == max) {
      if (maxNum > curMaxNum) {
        result = maxNum;
      } else {
        max = curMax;
        maxNum = curMaxNum;
        result = curMaxNum;
      }
    } else {
      result = maxNum;
    }
    curMax = 0;
  }

  return result;
}

function solution(arr) {
  let result,
    max = Number.MIN_SAFE_INTEGER;

  for (const n of arr) {
    let sum = 0,
      temp = n;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    if (sum > max) {
      max = sum;
      result = n;
    } else if (sum === max) {
      if (n > result) {
        result = n;
      }
    }
  }
  return result;
}

mySolution([128, 460, 603, 9999, 40, 2356, 521, 123451, 137, 11111155, 123]);
solution([128, 460, 603, 9999, 40, 2356, 521, 123451, 137, 11111155, 123]);
