// 1.首先找负数中绝对值最大的负数进行取反
// 2. 负数都取反以后，选取绝对值最小的数取反
var largestSumAfterKNegations = function (nums, k) {
  // 按绝对值从大到小排序
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] = -nums[i]
      k--
    }
  }
  if (k % 2 !== 0) {
    // 取最小值继续取反
    nums[nums.length - 1] = -nums[nums.length - 1]
  }
  // 求和
  return nums.reduce((a, b) => a + b, 0)
};

const nums = [- 3, -1, 2, 3], k = 5
const result = largestSumAfterKNegations(nums, k);
console.log(result)
