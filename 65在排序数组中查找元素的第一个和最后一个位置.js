function searchRange(nums, target) {
  const left = getBorder(nums, target, true);
  const right = getBorder(nums, target, false);
  return [left, right];
};

const getBorder = (nums, target, isLeft) => {
  let left = 0; right = nums.length - 1, result = -1;
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (nums[mid] === target) {
      result = mid;
      if (isLeft) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
const nums = [], target = 0
const result = searchRange(nums, target);
console.log(searchRange(nums, target));