// leetcode 560 合为K的数组
var subarraySum = function (nums, k) {
  let result = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += num[j];
      if (sum === k) {
        count++
      }
    }
  }
  return result;
};
const nums = [1, -1, 0], k = 0
console.log(subarraySum(nums, k))

