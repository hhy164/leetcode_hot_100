var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[left]) {
      // 说明[left,mid] 单增
      if (nums[mid] > target && nums[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
const nums = [3, 1], target = 1
const result = search(nums, target);
console.log(result)