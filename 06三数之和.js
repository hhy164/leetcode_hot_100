var threeSum = function (nums) {
  // 排序
  nums.sort((a, b) => a - b)
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return result;
    // 去重，如果下一个遍历的元素和上一个元素相等，那么后续的元素其实是已经遍历过了
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      // 去重
      if (left > i + 1 && nums[left] === nums[left - 1]) {
        left++;
        continue
      }
      if (right < nums.length - 1 && nums[right] === nums[right + 1]) {
        right--;
        continue;
      }
      let sum = nums[left] + nums[right] + nums[i]
      if (sum === 0) {
        // 目标值
        result.push([nums[i], nums[left], nums[right]])
        left++
      } else if (sum < 0) {
        // 和小了，那么需要把left右移，让总体值变大
        left++;
      } else {
        // 和大了
        right--;
      }
    }
  }
  return result;
};
