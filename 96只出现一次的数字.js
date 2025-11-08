var singleNumber = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      // 删除
      set.delete(nums[i])
    } else {
      set.add(nums[i])
    }
  }
  return [...set][0];
};
const nums = [2, 2, 1]
console.log(singleNumber(nums));
