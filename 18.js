// leetcode 198 打家劫舍
var rob = function (nums) {
  const len = nums.length;
  if (len === 0) return 0
  const dp = [0, nums[0]]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }
  return dp[len]
};
const nums = [1, 2, 3, 1, 5]
console.log(rob(nums))

