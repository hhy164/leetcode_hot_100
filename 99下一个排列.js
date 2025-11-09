var nextPermutation = function (nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    let numIndex;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        if (!numIndex || nums[numIndex] > nums[j]) {
          numIndex = j;
        }
      }
    }
    if (numIndex) {
      // 交换
      [nums[i], nums[numIndex]] = [nums[numIndex], nums[i]]
      // 对 i+1 到末尾的部分升序排列（原地反转，因为它一定是降序）
      let left = i + 1, right = nums.length - 1;
      while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
      return nums;
    }
  }
  return nums.reverse();
};
const nums = [2, 3, 1, 3, 3];
console.log(nextPermutation(nums))