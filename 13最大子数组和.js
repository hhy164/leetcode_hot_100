var maxSubArray = function (nums) {
  let sum = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }
    max = Math.max(max, sum)
  }
  return max;
};