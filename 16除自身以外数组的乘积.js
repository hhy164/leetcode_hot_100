var productExceptSelf = function (nums) {
  let len = nums.length;
  const answer = new Array(len).fill(1)
  let prefix = 1;
  // 计算前缀积
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix;
    prefix *= nums[i]
  }
  let suffix = 1;
  // 计算后缀积
  for (let i = len - 1; i >= 0; i--) {
    answer[i] = answer[i] * suffix;
    suffix *= nums[i]
  }
  return answer;
};