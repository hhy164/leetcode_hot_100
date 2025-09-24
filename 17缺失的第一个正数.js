var firstMissingPositive = function (nums) {
  const len = nums.length;
  const set = new Set(nums);
  for (let i = 1; i <= len + 1; i++) {
    if (!set.has(i)) {
      return i
    }
  }
};