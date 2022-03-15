function solution(nums) {
  const set = new Set(nums);

  const setLength = set.size / 2;
  const numsLength = nums.length / 2;
  if (numsLength === setLength || set.size > numsLength) {
    return numsLength;
  }

  return set.size;
}
