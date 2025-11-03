var searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

const nums = [1, 3], target = 2;
const result = searchInsert(nums, target);
console.log(result);