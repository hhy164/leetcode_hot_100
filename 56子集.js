var subsets = function (nums) {
  let result = [[]], path = [];
  const backtracking = (nums, used, startIndex) => {
    if (path.length === nums.length) {
      return;
    }
    for (let i = startIndex; i < nums.length; i++) {
      if (!used[i]) {
        // 未使用过当前数字
        path.push(nums[i])
        result.push([...path]);
        used[i] = true;
        backtracking(nums, used, i + 1);
        path.pop();
        used[i] = false;
      }
    }
  }
  backtracking(nums, new Array(nums.length).fill(false), 0)
  return result;
};
const nums = [1, 2, 3]
const result = subsets(nums)
console.log(result);