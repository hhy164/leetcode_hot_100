// leetcode 55 跳跃游戏
var canJump = function (nums) {
  // 初始条件
  let cover = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= cover) {
      cover = Math.max(nums[i] + i, cover)
      if (cover >= nums.length - 1) {
        return true
      }
    }
  }
  return false;
};

const nums = [1, 1, 0, 1, 4]
console.log(canJump(nums))



