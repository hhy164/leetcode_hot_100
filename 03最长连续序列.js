var longestConsecutive = function (nums) {
  if (!nums.length) return 0
  // 排序
  const newNums = nums.sort((a, b) => a - b);
  let max = 1;
  let len = 1;
  for (let i = 1; i < newNums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (nums[i - 1] === nums[i] - 1) {
      len++
    } else {
      // 不连续，重制
      max = Math.max(len, max)
      len = 1;
    }
  }
  return Math.max(max, len)
};