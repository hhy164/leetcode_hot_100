/**
 * 利用回溯解决
 * @param {*} nums 
 * @returns 
 */
var permute = function (nums) {
  let result = [], path = [];
  const backtracking = (nums, used) => {
    if (path.length === nums.length) {
      // 收集结果值
      result.push([...path])
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        // 未使用过当前数字
        path.push(nums[i])
        used[i] = true;
        backtracking(nums, used);
        path.pop();
        used[i] = false;
      }
    }
  }
  backtracking(nums, new Array(nums.length).fill(false))
  return result;
};

nums = [1, 2, 3];
const result = permute(nums);
console.log(result)