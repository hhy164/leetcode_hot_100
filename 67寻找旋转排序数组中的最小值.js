var findMin = function (nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const mid = parseInt((left + right) / 2);
    // 如果中点大于右边界，说明最小值在右半部分
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      // 说明最小值在左半部分
      right = mid;
    }
  }
  return nums[left];
};

const nums = [4, 5, 6, 7, 0, 1, 2]
const result = findMin(nums);
console.log(result);