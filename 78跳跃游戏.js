var canJump = function (nums) {
  if (nums.length === 1) return true;
  let cover = 0;
  // 只能在覆盖范围内移动
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) return true;
  }
  return false
};
const nums = [3, 2, 1, 0, 4];
const result = canJump(nums);
console.log(result)