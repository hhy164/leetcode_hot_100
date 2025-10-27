var jump = function (nums) {
  if (nums.length === 1) return 0;
  let cover = 0; // 当前的最大覆盖
  let nextCover = 0; // 下一步的最大覆盖 
  let step = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextCover = Math.max(i + nums[i], nextCover); // 下一步覆盖最远距离
    if (i === cover) {
      // 已经走到当前的最远下标了
      step++;
      cover = nextCover;
      if (cover >= nums.length - 1) break;
    }
  }
  return step;
};
const nums = [2, 1, 1, 1, 4];
const result = jump(nums);
console.log(result);
