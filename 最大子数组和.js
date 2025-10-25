// 求最大子数组和
var maxSubArraySum = function (nums) {
  let result = -Infinity, count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count < 0) {
      count = nums[i];
    } else {
      count += nums[i]
    }
    result = Math.max(result, count);
  }
  return result;
}

// 求最大子数组
var maxSubArray = function (nums) {
  let result = -Infinity, count = 0, start = 0, end = 0, tempStart = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count < 0) {
      count = nums[i];
      tempStart = i;
    } else {
      count += nums[i];
    }
    if (result < count) {
      end = i;
      start = tempStart;
      result = count;
    }
  }
  return nums.slice(start, end + 1)
}

const nums = [-10, -20, -1, -2, -3]
const result = maxSubArray(nums);
console.log(result);